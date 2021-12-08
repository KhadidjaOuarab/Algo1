
function sentencesLenght(sentence){

    return sentence.length

}

console.log(sentencesLenght('sentence aaaa aaaaa aaaaa.'));

function wordsCount(sentence) {
    let words = sentence.split(' ');
    return words.length
    
}
console.log(wordsCount('sentence aaaa aaaaa aaaaa.'));

function voyelleCOunt(sentence) {

   let tab = []
   tab = sentence.match(/[aeiouey]/g)
   return tab.length
    
}

console.log(voyelleCOunt('sentence aaaa aaaaa aaaaa.'));