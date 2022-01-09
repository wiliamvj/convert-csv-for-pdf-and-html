const Reader = require('./src/Reader');
const FileWriter = require('./src/FileWriter');
const Processor = require('./src/Processor');
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');

const readerFile = new Reader();
const writer = new FileWriter();

async function main() {
  var data = await readerFile.Read('./users.csv');
  var processorsData = Processor.Process(data);

  var users = new Table(processorsData);

  var html = await HtmlParser.Parse(users);

  writer.Write(`${Date.now()}.html`, html);
}

main();
