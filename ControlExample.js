function odd(num){
    if(num%2!=0){
        return "odd"
    }else if (num%2==0){
        return "even"
    }else{
        return "not a number"
    }
}

let oddNumber = odd(20);
console.log(oddNumber);


function age(age){
    if(age<18){
        return "minor"
    }else if (age>18 && age<60){
        return "adult"
    }else {
        return "senior"
    }
}



let ageGroup = age(3);
console.log(ageGroup);

let ageVerification =(age)=>
    age<18?"minor":"major";
let ageGroup1 = ageVerification(36);
console.log(ageGroup1);


let day=day=>{
    switch(day){
        case 0:
            console.log('sunday');
            break;
        case 1:
            console.log('monday');
            break;
        case 2:
            console.log('tuesday');
            break;
        case 3:
            console.log('wednesday');
            break;
        case 4:
            console.log('thursday');
            break;
        case 5:
            console.log('friday');
            break;
        case 6:
            console.log('satruday');
            break;
    }
}
day(2);

let nums = [10, 20, 30, 40];
console.log(nums[1]);


let printNumber= num =>{
    for(let number=0; number<=num.length; number++){
        console.log(num[number]);
    }
}

printNumber(nums);

let arr=nums.forEach(num => console.log(num*3));
console.log("forEach", arr);
console.log("nums",nums);

let mapArray = nums.map(num=> console.log(num*2));
console.log("map",mapArray)
console.log(nums);
console.log(arr);



let num = [1,2,3,4,5,8,34,70];
let splicedArray = num.splice(2,0,"number");
console.log(splicedArray);
console.log(num);

let names=['joe','vini','sona',...nums];
console.log(names);

let greeting = names.map(name => console.log('Hello ${names}'));
console.log(greeting);



let greetingFor = names.forEach(name =>
    console.log(`Hello ${name}`));
console.log(greetingFor); // undefined, as forEach doesn't return anything

// Correct the sum function to accept an array of numbers
function sum(...num){  // Spread operator to collect arguments as an array
    console.log(num);
    return num.reduce((acc, cur) => acc + cur, 200);
}    

let total = sum(1, 2, 3, 4, 5, 6, 10);
console.log(total);

// Filter the nums array for numbers greater than 5
let filtered = nums.filter(num => num > 5);
console.log(filtered);

// Fix the add function to handle the second argument properly
let add = (a = 20, b = 0) => a + b;
let addition = add(20);  // Since b defaults to 0, this will work
console.log(addition);






