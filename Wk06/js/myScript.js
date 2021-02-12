function checkAnswer(){
    //INPUT - 2 numbers, operators to be used, and answer
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let operatorUsed = document.getElementById('operatorUsed').value;
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let answer = parseFloat(document.getElementById('answer').value);
    let correctAnswer, comparison;
    //PROCESS - compute the equation using the numbers and operators used
    // compare the computed answer with the answer entered by the user
    switch (operatorUsed) {
        case '+':
            correctAnswer = firstNumber + secondNumber;
            break;
        case '-':
            correctAnswer = firstNumber - secondNumber;
            break;
        case '*':
            correctAnswer = firstNumber * secondNumber;
            break;
        case '/':
            correctAnswer = firstNumber / secondNumber;
            break;
    }

    if (correctAnswer == answer) {
        comparison = "Correct! 🏆"
    }
    else {
        comparison = "Incorrect 😥"
    }
    //OUTPUT - the necessary remarks for correct and incorrect answer
    document.getElementById('output').innerHTML = comparison;
}