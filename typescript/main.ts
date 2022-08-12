const AlphabetSet = [ 
    "a", "b","c", "d", "e",
    "f", 'g', "h", "i", "j","k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
]

const SpeicalSet = [
    "/", ":", ";", ")", "("
]

const Sets = [
    AlphabetSet, SpeicalSet, [0,1,2,3,4,5,6,7,8,9]
]


function randomIntFromInterval(min : number , max : number) : number { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function generatePassword(size : number) : string {
    let final : string = ""
    for (let i  : number = 1; i <= size; i++) {
        let randomIndex : number = randomIntFromInterval(0, 2)
        let choosenSet = Sets[randomIndex]

        let randomobject = choosenSet[randomIntFromInterval(1, choosenSet.length - 1)]
        final += randomobject
    }
       

    return final
}
    
console.log(generatePassword(20))
