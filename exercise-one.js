'use strict';

var Promise = require('bluebird'),
    exerciseUtils = require('./utils');

var readFile = exerciseUtils.readFile,
    promisifiedReadFile = exerciseUtils.promisifiedReadFile,
    blue = exerciseUtils.blue,
    magenta = exerciseUtils.magenta;

var args = process.argv.slice(2).map(function(st){ return st.toUpperCase(); });

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF
};

// runs every problem given as command-line argument to process
args.forEach(function(arg){
  var problem = module.exports['problem' + arg];
  if (problem) problem();
});

function problemA () {

   promisifiedReadFile('poem-one/stanza-01.txt')
      .then(function(text){
        blue(text);
      })
      .catch(function(err){
         console.log(err)
      })

   }

function problemB () {
   var promise1 = promisifiedReadFile('poem-one/stanza-02.txt');
   var promise2 = promisifiedReadFile('poem-one/stanza-03.txt');

  promise2
   .then(function(stanza3){
     blue(stanza3);
     return promise1;
   })
   .then(function(stanza2){
     blue(stanza2);
   })
   .catch( console.error )

}

function problemC () {

  var promise1 = promisifiedReadFile('poem-one/stanza-02.txt');
  var promise2 = promisifiedReadFile('poem-one/stanza-03.txt');

  promise1
  .then(function(stanza2){
    blue(stanza2);
    return promise2;
  })
  .then(function(stanza3){
    blue(stanza3);
  })
  .catch( console.error )

}

function problemD () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * D. log poem one stanza four or an error if it occurs
   *
   */
   promisifiedReadFile('poem-one/stanza-04.txt')
      .then(function(text){
        blue(text);
      })
      .catch(function(err){
         magenta(err);
      })
  // callback version
  // readFile('poem-one/wrong-file-name.txt', function (err, stanza4) {
  //   console.log('-- D. callback version (stanza four) --');
  //   if (err) magenta(err);
  //   else blue(stanza4);
  // });

  // promise version
  // ???

}

function problemE () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * E. read & log poem one stanza three and *then* read & log stanza four
   *    or log an error if it occurs for either file read
   *
   */

  // callback version
  readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- E. callback version (stanza three) --');
    if (err) return magenta(err);
    blue(stanza3);
    readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
      console.log('-- E. callback version (stanza four) --');
      if (err2) return magenta(err2);
      blue(stanza4);
    });
  });

  // promise version
  // ???

}

function problemF () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * F. read & log poem one stanza three and *then* read & log stanza four
   *    or log an error if it occurs for either file read
   *    always log 'done' when everything is done
   *
   */

  // callback version
  readFile('poem-one/stanza-03.txt', function (err, stanza3) {
    console.log('-- F. callback version (stanza three) --');
    if (err) {
      magenta(err);
      console.log('-- F. callback version done --');
      return;
    }
    blue(stanza3);
    readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
      console.log('-- F. callback version (stanza four) --');
      if (err2) magenta(err2);
      else blue(stanza4);
      console.log('-- F. callback version done --');
    });
  });

  // promise version
  // ???

}
