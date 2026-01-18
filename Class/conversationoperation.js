//javascript opnly automatically converts string to number in the 

let score="22";
    scoreforbool=true;
    scoreNull=null;
    underfindvar=undefined;

console.log(typeof score);
console.log(typeof scoreforbool);
console.log(typeof scoreNull);
console.log(typeof underfindvar);

let x=10;
let xx=Number(x)
console.log(xx);
console.log(x);

let string=Number(score);
console.log(string);
//If the string number convertes in the NUMBER and in the string have rather than number then it's show Nan


/*Activity no 1
all conversation operation
*/

//opearation
console.log("------Operation------");

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);


let str1="hello ";
let str2="world";
console.log(str1+str2);

console.log("1"+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);