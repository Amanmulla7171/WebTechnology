// Helper to write to both console and page
function print(msg) {
  console.log(msg);
  document.write(msg + "<br>");
}

// --- Variable Declaration ---
print("--- Variable Declaration ---");
const accountId = 1001;
print("Account ID: " + accountId);

// --- Block Scope (let vs var) ---
print("--- Block Scope Example ---");
let a = 10;
var b = 20;
print("Outside Block - a: " + a + ", b: " + b);

{
  let a = 100;
  let b = 200;
  print("Inside Block: a=" + a + ", b=" + b);
}

print("Outside Block after - a: " + a + ", b: " + b);

// --- Data Types ---
print("--- Data Types ---");

let accId = 101;
print("accId: " + accId);
print("Type of accId: " + typeof accId);

let accName = "Aman";
print("accName: " + accName);
print("Type of accName: " + typeof accName);

let isValid = true;
print("isValid: " + isValid);
print("Type of isValid: " + typeof isValid);

let temp;
print("temp: " + temp);
print("Type of temp: " + typeof temp);

let value = null;
print("value: " + value);
print("Type of value: " + typeof value + " (Note: 'object' is a known JS bug for null)");

let sym1 = Symbol("id");
print("Symbol: " + sym1.toString());
print("Type of sym1: " + typeof sym1);

let bigNumber = 91234567890123456789012345n;
print("BigInt: " + bigNumber);
print("Type of bigNumber: " + typeof bigNumber);

// --- Activity 01: Student Info ---
print("--- Activity 01: Student Info ---");
let sname = "Aman";
let sroll = 101;
let sage = 20;
let isBoy = true;
print("Name: " + sname);
print("Roll Num: " + sroll);
print("Age: " + sage);
print("isBoy: " + isBoy);

// --- Activity 02: Odd-Even ---
print("--- Activity 02: Odd-Even ---");
let num1 = 10;
if (num1 % 2 === 0) {
  print(num1 + " is Even Number");
} else {
  print(num1 + " is Odd Number");
}

// --- Activity 03: Pass-Fail ---
print("--- Activity 03: Pass-Fail ---");
let marks = 50;
if (marks > 40) {
  print("Result: Pass");
} else {
  print("Result: Fail");
}

// --- Activity 04: Loop ---
print("--- Activity 04: Loop ---");
print("First 10 Numbers:");
for (let i = 1; i <= 10; i++) {
  print("Number: " + i);
}