#!/usr/bin/env node
//
// fives.js
// job    : create a list of five-letter words for 5x5 mini crosswords
// job    : provide support for NYT 5x5 mini crossword clones
// git    : https://github.com/motetpaper/datawork-nyt-fives
// lic    : CC0, Publis domain
//
//
//
const fs = require('fs');

const infile = 'pg673.txt';
const outfile = 'fives.txt';


fs.readFile(infile, 'utf8', (err,data) => {

  const outdata = data.trim()
    .split(/\r\n|\r|\n/)
    .filter(a=>a.match(/<h1>.*/))
    .map((a)=>a.replace('<h1>',''))
    .map((a)=>a.replace('<h1>',''))
    .map((a)=>a.replace('</h1>',''))
    .map((a)=>a.toUpperCase())
    .filter(a=>a.match(/^\w{5}$/))

  fs.writeFile(outfile, outdata.join('\n'), (err)=>{
    if (err) throw err;
  });
});


