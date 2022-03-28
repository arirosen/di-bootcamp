


wordArray=[];
let user=prompt("enter a few words separated by a comma")
let word =user.split(",")
for (let i = 0; i < word.length; i++) {
   console.log(word[i])
}


for (let i = 0; i <word.length ; i++) {
    
   if( word[i].length<=word[i+1].length){
word[i]=word[i+1]}
else{
continue
}

}
console.log(word[i].length)


//in the middle//