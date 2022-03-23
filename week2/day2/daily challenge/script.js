let sentence = "The music is not that bad it is ok"

let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")


if (wordBad > wordNot) {
    sentence = "The music is good, I like it”"
    console.log(sentence)
}

else { console.log(sentence) }
