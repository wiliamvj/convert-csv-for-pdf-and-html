const pdf = require('html-pdf');

class PDFWriter {
  static WritertoPDF(filename, html) {
    pdf.create(html, {}).toFile(filename, (err) => {});
  }
}

module.exports = PDFWriter;
