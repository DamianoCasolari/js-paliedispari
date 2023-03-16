const userName = prompt("Inserisci una parola per veirificare che sia palindromo")
let turnWord = "";

for (let index = Number(userName.length); index < 0; index--) {
    const element = userName[index];
    console.log(element);
    
}