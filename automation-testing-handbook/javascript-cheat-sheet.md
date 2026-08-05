# JavaScript Cheat Sheet for Test Automation

---

# 1. Variables

```javascript
let username = "admin";     // can change
const url = "https://";     // cannot change
var oldVariable = "avoid";  // old syntax
```

### When to use
#### The main differences between var, let, and const are:
- Scope (where the variable can be accessed)
- Reassignment (can the value change?)
- Redeclaration (can you declare it again?)
- Hoisting (how JavaScript handles it before execution)

var is function-scoped and allows redeclaration and reassignment. let is block-scoped and allows reassignment but not redeclaration. const is also block-scoped but cannot be reassigned. In modern JavaScript, const is preferred by default, and let is used when the value needs to change.

- `const` → default choice
- `let` → when value changes
- `var` → avoid in modern JavaScript

---

# 2. Data Types

```javascript
const text = "Hello";       // String
const number = 25;          // Number
const active = true;        // Boolean
const nothing = null;       // Null
let value;                  // Undefined
const person = {};          // Object
const list = [];            // Array
```

---

# 3. Operators

## Comparison

```javascript
==
===     // preferred

!=
!==

>
<
>=
<=
```

### Difference

```javascript
5 == "5"     // true
5 === "5"    // false
```

Always use **===**.

---

# 4. Logical Operators

```javascript
&&   // and
||   // or
!    // not
```

Example

```javascript
if(username && password){
    login();
}
```

---

# 5. If Statements

```javascript
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
```

---

# 6. Ternary Operator

```javascript
const message =
age >=18
? "Adult"
: "Minor";
```

---

# 7. Switch

```javascript
switch(browser){

case "chrome":
    ...
    break;

case "firefox":
    ...
    break;

default:
    ...
}
```

Useful for browser selection.

---

# 8. Loops

## for

```javascript
for(let i=0;i<5;i++){
    console.log(i);
}
```

## for...of

```javascript
for(const item of items){
    console.log(item);
}
```

Best for arrays.

## for...in

```javascript
for(const key in object){
    console.log(key);
}
```

Best for objects.

## while

```javascript
while(condition){

}
```

---

# 9. Arrays

```javascript
const fruits = [
    "apple",
    "banana",
    "orange"
];
```

Useful methods

```javascript
push()

pop()

shift()

unshift()

includes()

indexOf()

length

map()

filter()

find()

forEach()

some()

every()
```

Examples

```javascript
fruits.push("kiwi");

fruits.includes("apple");

const numbers=[1,2,3];

const doubled=numbers.map(n=>n*2);
```

---

# 10. Objects

```javascript
const user = {
    username:"admin",
    password:"secret"
};
```

Access

```javascript
user.username

user["username"]
```

---

# 11. Destructuring
Destructuring in JavaScript is a way to extract values from arrays or properties from objects and store them into variables using a shorter syntax.


```javascript
const user={
    name:"John",
    age:30
};

const {name, age}=user;
```

Arrays

```javascript
const [first,second]=list;
```

---

# 12. Functions

Regular

```javascript
function login(){

}
```

Return

```javascript
function sum(a,b){
    return a+b;
}
```

Arrow

```javascript
const login=()=>{

};
```

Arrow with return

```javascript
const sum=(a,b)=>a+b;
```

---

# 13. Scope

```javascript
let global="A";

function test(){

    let local="B";
}
```

Global

Accessible everywhere.

Local

Accessible only inside function/block.

---

# 14. Template Literals

```javascript
const user="John";

console.log(`Hello ${user}`);
```

Instead of

```javascript
"Hello "+user
```

---

# 15. Spread Operator

```javascript
const a=[1,2];

const b=[...a,3];
```

Objects

```javascript
const user={
    ...person,
    age:30
};
```

---

# 16. Rest Operator

```javascript
function sum(...numbers){

}
```

Accepts multiple parameters.

---

# 17. Optional Chaining

```javascript
user?.address?.city
```

Avoids

```
Cannot read property...
```

---

# 18. Nullish Coalescing

```javascript
const name=user.name ?? "Guest";
```

Uses default only when value is

- null
- undefined

---

# 19. Promises

```javascript
fetchData()
.then(...)
.catch(...)
```

Mostly replaced by async/await.

---

# 20. Async / Await ⭐⭐⭐

Very important for WebdriverIO.

```javascript
async function login(){

    await browser.url("/");

    await $("#user").setValue("admin");

    await $("#password").setValue("secret");

    await $("button").click();
}
```

Remember

```
async

↓

await

↓

Promise resolves

↓

Next line executes
```

---

# 21. try / catch

```javascript
try{

    await login();

}
catch(error){

    console.log(error);

}
```

---

# 22. Import / Export (ES Modules)

Export

```javascript
export class LoginPage{

}
```

Import

```javascript
import { LoginPage }
from "../pages/login.page.js";
```

Default Export

```javascript
export default LoginPage;
```

Import

```javascript
import LoginPage
from "../pages/login.page.js";
```

---

# 23. CommonJS

Old syntax.

```javascript
const fs=require("fs");

module.exports=LoginPage;
```

Modern projects use ES Modules.

---

# 24. Classes

## *What is a Class?*
A class is a blueprint used to create objects.
It defines:
Properties (data)
Methods (behavior)


## *What is an Object?*
An object is an instance of a class.

```js
const user=new User('John');
// every object has its own data
```



```javascript
class LoginPage{

    open(){

    }

    login(){

    }

}
```

## *Constructor:*
The constructor is a special method that runs automatically when an object is created.


```js
class User{

    constructor(name){

        this.name=name;

    }

}
```


## Inheritance

```javascript
class LoginPage
extends Page{

}
```

## super()
Used to call the parent class constructor.


```js
class Animal{

    constructor(name){

        this.name=name;

    }

}

class Dog extends Animal{

    constructor(name){

        super(name);

    }

}
```

## Method Overriding (Polymorphism)
A child class can replace a parent's implementation.
Polymorphism means the same method name can have different behavior depending on the object.

```js
class Animal{

    speak(){

        console.log("Animal");

    }

}

class Dog extends Animal{

    speak(){

        console.log("Woof");

    }

}

//Now
new Dog().speak();
//prints
//Woof
//This is an example of polymorphism.

```


## Encapsulation
Encapsulation means keeping data and behavior together inside a class while controlling access to the internal data.
Example:

```js
class BankAccount{

    #balance=0;

    deposit(amount){

        this.#balance+=amount;

    }

    getBalance(){

        return this.#balance;

    }

}
//Private fields begin with #.
//They cannot be accessed outside the class.

```

## Abstraction
Abstraction means exposing only what users need while hiding implementation details.
Example:
Instead of knowing how login works internally, a test simply calls:
await LoginPage.login(username,password);
The test doesn't care how the clicks and typing are implemented.

# OOP Principles

Encapsulation -	Bundle data and methods together while controlling access to data.
Inheritance -	A class can inherit from another class using extends.
Polymorphism -	The same method can behave differently in different classes.
Abstraction -	Hide implementation details and expose only what users need.

# Easy Memory Trick:

- Class → Blueprint
- Object → Instance
- Constructor → Initializes object
- this → Current object
- Inheritance → Reuse code
- Encapsulation → Protect data
- Polymorphism → Same method, different behavior
- Abstraction → Hide complexity
- Static → Utility method, no object needed


---

# 25. this Keyword

```javascript
class LoginPage{

    username=$("#user");

    login(){

        this.username.click();

    }

}
```

`this`

Means

"The current object."

---

# 26. Useful Array Methods

### map()

Transforms every element.

```javascript
users.map(user=>user.name)
```

---

### filter()

Keeps matching elements.

```javascript
users.filter(user=>user.active)
```

---

### find()

Returns first match.

```javascript
users.find(user=>user.id===5)
```

---

### some()

Returns true if one matches.

---

### every()

Returns true if all match.

---

### forEach()

Loops through items.

---

# 27. Equality

Always use

```javascript
===

!==
```

instead of

```javascript
==

!=
```

---

# 28. Truthy / Falsy

Falsy values

```javascript
false

0

""

null

undefined

NaN
```

Everything else is Truthy.

---

# 29. Useful String Methods

```javascript
trim()

includes()

startsWith()

endsWith()

replace()

split()

toLowerCase()

toUpperCase()
```

---

# 30. Useful Number Methods

```javascript
parseInt()

parseFloat()

Number()

Math.random()

Math.floor()

Math.ceil()

Math.round()
```

---

# 31. JSON

Convert object → JSON

```javascript
JSON.stringify(user)
```

Convert JSON → object

```javascript
JSON.parse(data)
```

---

# 32. Modules in Test Automation

Typical imports

```javascript
import { expect } from "@wdio/globals";

import LoginPage from "../pages/login.page.js";

import users from "../data/users.json";
```

---

# 33. Common WebdriverIO Pattern

```javascript
class LoginPage{

    get username(){

        return $("#user");

    }

    async login(user,pass){

        await this.username.setValue(user);

    }

}
```

---

# 34. Most Common Interview Questions

### Difference between

```
let

const

var
```

Know this well.

---

### Difference between

```
==

===
```

Know this perfectly.

---

### What is async/await?

Waits until Promise finishes.

---

### What is a Promise?

Represents a future value.

---

### What is destructuring?

Extract values from objects or arrays.
 or more formal destructuring in JavaScript is a way to extract values from arrays or properties from objects and store them into variables using a shorter syntax.

---

### What is a callback?

A function passed into another function.

---

### What is an arrow function?

Shorter function syntax.

---

### Difference between map() and forEach()

```
map()

returns new array

forEach()

returns nothing
```

---

### Difference between filter() and find()

```
filter()

returns many

find()

returns first
```

### template literals:
Template literals are a way to create strings using **backticks ()** instead of normal quotes ('or"`). They allow you to:
Insert variables directly into strings (interpolation)
Write multi-line strings easily
Include expressions inside strings(anything that evaluates value)

---

# JavaScript Topics Most Important for Automation

⭐⭐⭐⭐⭐

- Variables
- Functions
- Arrays
- Objects
- Classes
- Async / Await
- Promises
- Import / Export
- Destructuring
- Template literals

⭐⭐⭐⭐

- Spread operator
- Rest operator
- Optional chaining
- try/catch
- map/filter/find

⭐⭐⭐

- Scope
- Closures (basic understanding)
- Callbacks
- JSON
- Truthy/Falsy