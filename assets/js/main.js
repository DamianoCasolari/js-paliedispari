// const userName = prompt("Inserisci una parola per veirificare che sia palindromo")
// let turnWord = "";

// for (let index = 0; index < userName.length; index++) {
//     const element = userName[index];
//     console.log(element);
//     turnWord += element;
// }
// console.log(turnWord);


// const userName = prompt("Inserisci una parola per veirificare che sia palindromo")

// function checkPalindrome(word) {
//     let turnWord = "";

//     for (let index = word.length - 1; index > -1; index--) {
//         const element = word[index];
//         console.log(element);
//         turnWord += element;
//     }

//     console.log(turnWord);
//     return turnWord

// }

// let reverseWord = checkPalindrome(userName);


// if (userName == "") {
//     document.getElementsByTagName("h2")[0].innerHTML = `Non hai inserito nessuna parola`
// } else if (userName == reverseWord) {
//     document.getElementsByTagName("h2")[0].innerHTML = `il nome inserito (${userName}) è un Palindromo`
// } else {
//     document.getElementsByTagName("h2")[0].innerHTML = `il nome inserito (${userName}) NON è un Palindromo`
// }


// Even or odd play 

function randomNumber() {
    let pcNumber = Math.floor(Math.random() * 5) + 1 //Math.random includes 0 exludes 1
    return pcNumber;
}

function result(num1, num2) {
    let sum = num1 + num2;
    if (sum % 2 == 0) {
        return "pari"

    } else {
        return "dispari"
    }
}



    const evenOrOdd = prompt("Scegli pari o dispari?").toLocaleLowerCase()
    const chooseANumber = Number(prompt("Scegli un numero da 1 a 5"))
    console.log(randomNumber());
    let pcNumber = randomNumber();

    let finalResult = result(chooseANumber, pcNumber)
    let playerPoints = 0;
    let pcPoints = 0;

    if (finalResult == evenOrOdd) {
        document.querySelector(".result").innerHTML = "You win, The sum is even"
        document.querySelector(".player").innerHTML = `Player ${++playerPoints} `
        document.querySelector(".current_game_points_player").innerHTML = chooseANumber
        document.querySelector(".current_game_points_pc").innerHTML = pcNumber
    } else {
        document.querySelector(".result").innerHTML = "You Lost, The sum is odd"
        document.querySelector(".computer").innerHTML = `computer ${++pcPoints} `
        document.querySelector(".current_game_points_player").innerHTML = chooseANumber
        document.querySelector(".current_game_points_pc").innerHTML = pcNumber
    }
