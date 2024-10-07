names='kirthi';
console.log(names);
let name;
 name ='kiki';
 console.log('hello i am ${name}')  //ES6
 var names;

 const num=1;
 console.log(num);
  
 Boolean = true;
 console.log(Boolean);

 let arr=[1,3,5,7];
 console.log(arr);


 let obj = {
    name: 'kiki',
    age: 23,
    greet: function() {
        console.log(`Hello ${this.name}, my age is ${this.age}`);
    }
}

obj.greet();


const{nam,age} = obj; //desturcting

function greeting(){
    console.log('hello world');
}                                         //greeting

greeting();


var welcome = function(){
    console.log("welcome");
    return "welcome"
}                                          // welcome

let functionValue=welcome();
console.log("func" , functionValue);

let arrow = (name,age) => "arrow welcome" + name + " " + age;
let arrowfunc = arrow("abi" ,3 );
console.log("arrow", arrowfunc);

console.log("my age is ", age);
console.log("my name is ", nam);
obj.greet();
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);

