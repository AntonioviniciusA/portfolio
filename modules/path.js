const { default: test } = require("node:test");
const path = require("path");

//apenas o nome do arquivo atual
console.log(path.basename(__filename)); // nome do diretorio atual
console.log(path.dirname(__filename));
// extenção do arquivo
console.log(path.extname(__filename));
//criar objeto path
console.log(path.parse(__filename));
// juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
