class Procesor {
  static Process(data) {
    var row = data.split('\n');
    var rows = [];

    row.forEach((row) => {
      var arr = row.split(',');
      rows.push(arr);
    });

    return rows;
  }
}

module.exports = Procesor;
