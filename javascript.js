const button = document.querySelector("#btn");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

function lastLetter(string){
  length = string.length;
  lastLetter = string.substring(length-1,length);
  return lastLetter;
}
const result = lastLetter("hello");
document.querySelector("#output").textContent = result;

function fizzBuzz(num){
  const output = document.querySelector("#fizzbuzz");
  output.innerHTML = "";
  counter = 0;
  while(counter < num){
    counter++;
    if(counter % 3 == 0 && counter % 5 == 0){
      console.log("FizzBuzz"); 
    }else if(counter% 3 == 0){
      console.log("Fizz");
    } else if(counter % 5 == 0){
      console.log("Buzz");
    } else{
      console.log(counter);
    }
  }
}

fizzBuzz(20);

