const prompt = require('prompt-sync')
({sigint: true})


const str ='purple,orange,green'

// let one = prompt(sting(""))


let firstColor =  String 
let secondColor = String
let deconstructcolors = String


if(one === str ){
    firstColor = String(prompt("First color: "))
    secondColor = String(prompt("Second color: "))
if (firstColor === 'red' && secondColor === 'blue' ||
    firstColor === 'blue' && secondColor === 'red'){
        console.log(firstColor + " and " + secondColor +" = " +"purple" )
} else if(firstColor === 'red' && secondColor === 'yellow' ||
    firstColor === 'yellow' && secondColor === 'red'){
        console.log(firstColor + " and " + secondColor + " = " +"orange" )
} else if(firstColor === 'blue' && secondColor === 'yellow' ||
    firstColor === 'yellow' && secondColor === 'blue'){
        console.log(firstColor + " and " + secondColor + " = " +"green" )
} else{
        console.log("error")
}
}

 else if(one === '2'){ 
    deconstructcolors = String(prompt("Deconstruck color: "))
if(deconstructcolors === 'purple'){
        console.log("Red  and Blue")
}else if(deconstructcolors === 'orange'){
        console.log("Red and Yellow")
}else if(deconstructcolors === 'green'){
        console.log("Blue and Yellow")
}else {
        console.log("error")
}
} else{ (combine !== '1' || combine !== '2')
    return
}
