// 4. OBJECTS IN TS
//4.2 METHODS IN OBJECTS WITH TS
interface User {
    userName: string;
    age?: number;
    getMessage(): string;
    // getMessage?(): string //one of thee ways to specify optional method on interface
}

const user: User = {
    userName: "Iryna Kresinska",
    age: 27,
    getMessage() {
        return 'Hello' + ' ' + this.userName;
    }
};

const user2: User = {
    userName: "Iryna",
    getMessage() {
        return 'Hello' + ' ' + this.userName;
    }
};
console.log(user.getMessage());
console.log(user2.getMessage());

//4.1 INTERFACES TO DESCRIBE OBJECT PROPERTIES TYPES
//better practice is to specify types explicitly
/*interface User {
    name: string;
    age?: number; //if age is not a mandatory property
}

const user: User = {
    name: "Iryna",
    age: 27,

};

const user2: User = { //no errors
    name: "Iryna",
};
console.log(user);
console.log(user2);*/


/*interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Iryna",
    age: 27
};

const user2: User = { //TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'User'.
    name: "Iryna",
};
console.log(user);*/

/*const user: { name: string; age: number; } = {
    name: "Iryna",
    age: 27
};
// in order to avoid repeating of the types block use interfaces
const user2: { name: string; age: number; } = {
    name: "Iryna2",
    age: 272
};
console.log(user);*/

/*//ts recognizes types of values in the props automatically
const user = {
    name: "Iryna",
    age: 27
};
console.log(user);*/

// 3. FUNCTIONS IN TS
// const getFullName = (name: string, surname: string):string => true; //TS2322: Type 'boolean' is not assignable to type 'string'., would not compile
const getFullName = (name: string, surname: string):string => name + " " + surname; //TS2322: Type 'boolean' is not assignable to type 'string'., would not compile
console.log(getFullName("I", "K"))// shows true

/*const getFullName = (name: string, surname: string) => true; //no explicit type check of the returned value leads to bugs
console.log(getFullName("I", "K"))// shows true*/

/*//ts recognizes type of the returned value automatically
const getFullName = (name: string, surname: string) => name + " " + surname;
console.log(getFullName("I", 5));//TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(getFullName("I", "K"));//compiles without error, increases chances of proper function usage.*/

//2. CONST LET VAR IN TS

//ts performs an automatic type recognition but it's better to assign types explicitly
let hello: string = 'hello';

/*
let hello = 'hello';
hello = 'world'; //you may only assign value of the same type as in declaration
hello = 5; //TS2322: Type 'number' is not assignable to type 'string'.
*/

/*
const hello = 'hello';
hello = 'word'; //TS2588: Cannot assign to 'hello' because it is a constant.
*/
console.log(hello);

//1. BASIC PRINCIPALS
const a = "Hello Word";
console.log(a) // a is in console only after main.ts got recompiled to main.js, ts files can\'t be executed in browser
// console.log(a.foo())//TS2339: Property 'foo' does not exist on type '"a"', this code cant be transpiled, error in text editor and in the CL