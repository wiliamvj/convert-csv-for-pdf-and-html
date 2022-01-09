const Reader = require('./src/Reader');
const Processor = require('./src/Processor');
const Table = require('./src/Table');

const readerFile = new Reader();

async function main() {
  var data = await readerFile.Read('./users.csv');
  var processorsData = Processor.Process(data);

  var users = new Table(processorsData);

  console.log(users.rows);
}

main();
