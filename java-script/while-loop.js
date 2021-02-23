// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }

const secret = "BabyHippo";

let guess = prompt("enter the secret code..");
while (guess !== secret){
    guess = prompt("enter the secret code..");
}
console.log("congrats you got the secret")