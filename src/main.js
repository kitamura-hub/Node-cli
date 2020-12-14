// commanderモジュールをprogramとしてインポートする
const commander = require("commander");
// fsモジュールをインポート
const fs = require("fs");

// コマンドライン引数からファイルパスを取得する
commander.parse(process.argv);
const filePath = commander.args[0];

// ファイルを非同期で読み込む(utf-8形式で)
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if(err) {
    console.error(err.message);
    // 終了ステータス1(一般的なエラー)としてプロセスを終了する
    process.exit(1);
    return;
  }
  console.log(file);
});