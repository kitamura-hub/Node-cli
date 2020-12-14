// commanderモジュールをprogramとしてインポートする
const commander = require("commander");
// fsモジュールをインポート
const fs = require("fs");

// コマンドライン引数からファイルパスを取得する
commander.parse(process.argv);
const filePath = commander.args[0];

// ファイルを非同期で読み込む(utf-8形式で)
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    console.log(file);
});