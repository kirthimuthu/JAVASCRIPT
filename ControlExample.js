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






