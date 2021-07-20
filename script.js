const InputArg = process.argv


function calculator(number1, operator, number2) {
    let total = 0
    if (Number(number1)  && Number(number2) && (operator === '*' || operator === 'times' )) {
        total =  Number(number1) * Number(number2)

    } else if (Number(number1)  && Number(number2) && (operator === '/' || operator === 'divide')) {
        total =  Number(number1) / Number(number2)
    
    } else if (Number(number1)  && Number(number2) && (operator === '+' || operator === 'plus')) {
        total =  Number(number1) + Number(number2)
    
    } else if (Number(number1)  && Number(number2) && (operator === '-' || operator === 'minus' )) {
        total =  Number(number1) - Number(number2)
    
    } else {
        console.log("please enter a number..")
    }
     console.log(`Resault: ${total}`)
}

calculator(InputArg[2], InputArg[3], InputArg[4])














// async function sayHello(name) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 3000);
//     });
// }

// (async function () {
//     const name = await sayHello("Tati");
//     console.log(name)
//     console.log("After");
// })()
