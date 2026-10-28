class Solution {
  encode(strs) {
    let str = "";

    for (let word of strs) {
      let res = `${word.length}!${word}`
      str += res;
    }

    return str;
  }

  decode(str) {
    let res = []
    let i = 0;

    while (i < str.length) {
      let punctuationPos = str.indexOf("!", i);

      let wordLength = +str.slice(i, punctuationPos);

      let word = str.slice(punctuationPos + 1, punctuationPos + wordLength + 1);

      res.push(word);

      i = punctuationPos + wordLength + 1;
    }

    return res;
  }
}