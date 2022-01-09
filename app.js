const Reader = require('./src/Reader');
const Processor = require('./src/Processor');

const readerFile = new Reader();

async function main() {
  var data = await readerFile.Read('./users.csv');

  console.log(data);
}

main();
