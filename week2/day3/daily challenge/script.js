//Daily Challenge: Stars//

for (let i = 1; i <= 6; i++) {
    star = "*";
    console.log(star.repeat(i))
}

let sign = "*";
for (let i = 1; i <= 6; i++) {
    for (let j = 0; j < i; j++) {
        console.log(sign)
    }
    console.log('\n')
}


