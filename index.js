var es = require('event-stream');
var special = require('special-html');

module.exports = function(){
  'use strict';

  return es.map(function(file,callback){
  	file.contents = special(String(file.contents))
  	callback(null,file)
  });

};
