// const userName = prompt("Inserisci una parola per veirificare che sia palindromo")
// let turnWord = "";

// for (let index = 0; index < userName.length; index++) {
//     const element = userName[index];
//     console.log(element);
//     turnWord += element;
// }
// console.log(turnWord);


const userName = prompt("Inserisci una parola per veirificare che sia palindromo")
let turnWord = "";

function checkPalindrome(userName) {

    for (let index = userName.length - 1; index > -1; index--) {
        const element = userName[index];
        console.log(element);
        turnWord += element;
    }
    console.log(turnWord);
   
}



checkPalindrome(userName);

if (userName == "") {
    document.getElementsByTagName("h2")[0].innerHTML = `Non hai inserito nessuna parola`
} else if (userName == turnWord) {
    document.getElementsByTagName("h2")[0].innerHTML = `il nome inserito (${userName}) è un Palindromo`
} else {
    document.getElementsByTagName("h2")[0].innerHTML = `il nome inserito (${userName}) NON è un Palindromo`
}