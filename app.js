const Reader = require('./src/Reader');
const Processor = require('./src/Processor');
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');

const readerFile = new Reader();

async function main() {
  var data = await readerFile.Read('./users.csv');
  var processorsData = Processor.Process(data);

  var users = new Table(processorsData);

  var html = await HtmlParser.Parse(users);

  console.log(html);
}

main();
