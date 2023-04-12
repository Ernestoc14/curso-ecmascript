const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2015-01-02');
const year = match[1];
const month = match[2];
const day = match[3];
console.table(match);
