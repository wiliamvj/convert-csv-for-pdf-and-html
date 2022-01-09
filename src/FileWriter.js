const fs = require('fs');
const util = require('util');

class FileWriter {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filename, data) {
    try {
      await this.writer(filename, data);
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = FileWriter;
