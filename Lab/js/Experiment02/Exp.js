//Activity no 1
let array=[1,2,3,4,5,6];
console.log(array[1]);

function addition(){
    let sum=0;
    for(let i=1;i<5;i++){
        sum=sum+i;
    }
    return sum;
    
}


console.log(addition());

//Activity 02
//Find the reverse number 
let num=123;
let rev=0;
while(num!=0){
    reminder=num%10;
    rev=rev*10+reminder;
    num=Math.floor(num/10);//we use math.floor for show decimal point
}
console.log(rev);



//palindrome
let num1=123;
let num2=321;
while(num!=0){
    reminder=num%10;
    rev=rev*10+reminder;
    num=Math.floor(num/10);//we use math.floor for show decimal point
}

if(rev==num2){
    console.log("The number is Palindrome");
    
}
else{
    console.log("Not a palindrome");
    
}


//Find the largest number
let array1=[1,2,3,4,5,6,7,8,9];
let max=array1[0];
for(let i=0;i<array1.length;i++){
    if(array1[i]>max){
        max=array1[i]
    }
}
console.log("largest number:"+max);

//fabinoucy series
let n=10;
let a=0;
let b=1;
console.log(a);
console.log(b);

for(let i=2;i<=n;i++){
    let c=a+b;
    console.log(c);
    
    a=b;
    b=c;
    
}

//remove duplicate
let array2=[1,2,3,4,2,6,7,8,9];
let duplicate=array2[1];
for(let i=0;i<array2.length;i++){
    for(let j=i+1;j<array2.length-1;j++){
        if(array2[i]===array2[j]){
            console.log("Duplicate:"+array2[i]);
            

        }
    }
}


//missing number

let array3=[1,2,4,5];
let n1=5;
let expectedsum=(n1 * (n1 + 1)) / 2;
let actualsum=0;

for(let i=0;i<array3.length;i++){
    actualsum +=array3[i]
}
let missing=expectedsum-actualsum;
console.log("missing number:"+missing);

//vowel in string 

let str="Hello world";
let count=0;
let vowel="aeiouAEIOU";
for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        count++;
    }
}
console.log("Number of vowel is :"+count);


//Function with identify odd and even
 function oddeven(num){
    if(num%2===0){
        console.log("Number is even");
        
    }
    else{
        console.log("Number is odd");
        
    }
 }

oddeven(10);


//Function find the sum of array
let sarray=[1,4,65,54,585,8];
function sumofarray(sumarray){
    let sum=0;
    for(let i=0;i<sumarray.length;i++){
        sum=sum+sumarray[i];
    }
    return sum
}

console.log("Sum of array"+sumofarray(sarray));
