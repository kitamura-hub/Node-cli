// commanderモジュールをprogramとしてインポートする
const commander = require("commander");
// fsモジュールをインポート
const fs = require("fs");
// コマンドライン引数をcommanderでパースする
commander.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const filePath = commander.args[0];
console.log(filePath);