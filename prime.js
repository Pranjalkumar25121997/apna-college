let num = 11;
let count = 0;

for(let i = 0; i<=num; i++){
    if(num%i == 0){
        count++;
    }
}
if(count == 2){
    console.log("Prime number");
}else{
    console.log("Non-Prime Number");
}

//? Print prime numbers between 1 to 100:-

for(let i = 1; i<=100; i++){
    count = 0;
    for(let j = 0; j<=num; j++){
        if(i%j == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(i,"Prime Number");
    }else{
        console.log(i,"Non-Prime Number");
    }
}