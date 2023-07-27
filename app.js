console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }else{
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzbuzz");
        }else if(i%3 == 0){
            console.log("fizz");
        }else if (i%5 == 0){
            console.log("buzz");
        }else{
        console.log(i);
        }
    }
}

console.log("EXERCISE 3:\n==========\n");
let i = 0;
while(i < 100){
    if(i % 2 == 0){
        i++;
        continue;
    }else{
        console.log(i);
    }
    i++;
}

i = 0;
do{
    if(i % 2 == 0){
        i++;
        continue;
    }else{
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzbuzz");
        }else if(i%3 == 0){
            console.log("fizz");
        }else if (i%5 == 0){
            console.log("buzz");
        }else{
        console.log(i);
        }
    }
    i++;
} while(i<100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let iterator = 0;
while(iterator <= value){
    console.log(iterator);
    iterator++;
}
console.log("found your number");

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * 9 + 1);
let buzzDivisor = Math.round(Math.random() * 9 + 1);
let start = Math.round(Math.random() * 9 + 1);
let end = Math.round(Math.random() * 900 + 100);
console.log(`fizz : ${fizzDivisor}  buzz : ${buzzDivisor}  start : ${start}  end : ${end}`)
for(let i = start; i < end; i++){
    if(i%fizzDivisor == 0 && i%buzzDivisor == 0){
        console.log("fizzbuzz");
    }else if(i%fizzDivisor == 0){
        console.log("fizz");
    }else if (i%buzzDivisor == 0){
        console.log("buzz");
    }else{
    console.log(i);
    }
}