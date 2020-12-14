// インポート群
const commander = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

// gfmオプションを定義する
commander.option("--gfm", "GFMを有効にする");
commander.parse(process.argv);
// コマンドライン引数からファイルパスを取得
const filePath = commander.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...commander.opts(),
}

// ファイルを非同期で読み込む(utf-8形式で)
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if(err) {
    console.error(err.message);
    // 終了ステータス1(一般的なエラー)としてプロセスを終了する
    process.exit(1);
    return;
  }
  // MarkdownファイルをHTMLファイルに変換する
  const html = md2html(file, cliOptions);
  console.log(html);
});