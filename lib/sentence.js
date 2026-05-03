'use strict';

const countSentences = function(sentences){
  console.log(sentences);
  console.log(sentences.split(/[.!?]+/).filter(Boolean).length);
  return sentences.split(/[.!?]+/).filter(Boolean).length;
};

module.exports = countSentences;
