
debugger;
let useFirstAnswer = parseInt(prompt("Enter the value of a!"));
while (isNaN(useFirstAnswer)) {
   useFirstAnswer = parseInt(prompt("Enter the value of a!"));
    if(!useFirstAnswer) {
        alert("You must enter number")
    } else if(isNaN(useFirstAnswer))
    {
        alert("It`s not a number!")
    }
}

let useSecondAnswer = parseInt(prompt(`Enter the value of b, which is greater than ${useFirstAnswer}`));
while (useSecondAnswer <= useFirstAnswer || isNaN(useSecondAnswer)) {
    useSecondAnswer = parseInt(prompt(`Enter the value of b, which is greater than ${useFirstAnswer}`));
    if(!useSecondAnswer) {
        alert("You must enter number")
    } else if(isNaN(useSecondAnswer))
    {
        alert("It`s not a number!")
    } else if (useSecondAnswer <= useFirstAnswer) {
        alert("Try again!")
    }
}

let useStep = parseInt(prompt(`Enter step, which is less ${useSecondAnswer - useFirstAnswer}`));
while (isNaN(useStep) || useStep >= useSecondAnswer - useFirstAnswer) {
    useStep = parseInt(prompt(`Enter step, which is less ${useSecondAnswer - useFirstAnswer}`));
    if(!useStep) {
        alert("You must enter value step!")
    } else if (useStep >= useSecondAnswer - useFirstAnswer ) {
        alert (`Step must be less,than ${useSecondAnswer - useFirstAnswer}`)
    }
}
for (sum = 0; useFirstAnswer <= useSecondAnswer; useFirstAnswer += useStep) {
    factorial = 1;
    console.log(`Factorial ${useFirstAnswer}`);
    for (i = 1; i <= useFirstAnswer; i++) {
        factorial *= i;
    }
    console.log(`Factorial ${factorial}`);
    sum += factorial;

}
console.log(`Sum of all factorials ${sum}`);