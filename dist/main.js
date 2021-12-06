//**************************************************************************//
//8. CLASSES IN TS
//**************************************************************************//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, id) {
        this.userName = name;
        this.id = id;
    }
    User.prototype.getUserName = function () {
        return this.userName;
    };
    return User;
}());
//--------------------------------------------------------------------------//
//8.3. INHERITANCE
//--------------------------------------------------------------------------//
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.showMessage = function () {
        console.log('this is message from admin');
    };
    return Admin;
}(User));
// const admin = new Admin()//TS2554: Expected 2 arguments, but got 0.//comes from the User class
var admin1 = new Admin("Admin", "jdhfjdhfj"); //no errors
console.log(admin1.getUserName()); //getUserName was defined in the User class, still instances of Admin class have access to them
admin1.showMessage(); //this is method provided by Admin class
//--------------------------------------------------------------------------//
//8.1. CLASS DECLARATION WITH TS
//--------------------------------------------------------------------------//
/*class User {
    public fName: string;
    private lName: string;
    readonly unchangableNum: number;

    constructor(firstName: string, lastName: string) {
        this.fName = firstName;//TS2339: Property 'fName' does not exist on type 'User', to fix - declare types above
        this.lName = lastName;//same here
        this.unchangableNum = 7;
    }
    getFullName():string {
        return this.fName + " " + this.lName;
    }

    changeNum(): void {
        this.unchangableNum = 10;//TS2540: Cannot assign to 'unchangableNum' because it is a read-only property.
    }
}

const user1 = new User("Iryna", "Kresinska");
const res = user1.getFullName();
const fName1= user1.fName; //property is public by default, but you can add that explicitly
// const lName1 = user1.lName; //TS2341: Property 'lName' is private and only accessible within class 'User'.
console.log(res);*/
//**************************************************************************//
//7. WORKING WITH DOM
//**************************************************************************//
/*//ts recognizes the highest elements in hierarchy, like Element (for any html element) and Event
//in order to reach event.target.value of input element we need to use type assertion in order to reach specific for element methods

const input = document.querySelector('.input');//type is HTMLElement
//assuming input has value
console.log(input.value);//TS2339: Property 'value' does not exist on type 'Element'.

const input1 = document.querySelector('.input') as HTMLInputElement;//make type more specific by hand
console.log(input1.value);//works

input.addEventListener('blur', (e) => {
    console.log(e.target.value)
    const target = e.target as HTMLInputElement;
    console.log(target.value)
})*/
//**************************************************************************//
//6. ANY / VOID / NEVER / UNKNOWN
//**************************************************************************//
//--------------------------------------------------------------------------//
//6.5. TYPE ASSERTION
//--------------------------------------------------------------------------//
/*
let vUnkn: unknown = 10;
let newV: string = vUnkn as string;
console.log(newV);

let pageNumb: number = 1;
let pageStr: string = pageNumb //TS2322: Type 'number' is not assignable to type 'string'.
let pageStr1: string = pageNumb as string//TS2352: Conversion of type 'number' to type 'string'
// may be a mistake because neither type sufficiently overlaps with the other. If this was intentional,
// convert the expression to 'unknown' first.
let pageStr2: string = (pageNumb as unknown) as string; //no error*/
//6.4. UNKNOWN
//--------------------------------------------------------------------------//
/*
//unknown is a better alternative to any, you can not assign the value of the variable with type unknown to another variable with defined type;

// let varUnknown: unknown = 10;
// let newVar : string = varUnknown;//TS2322: Type 'unknown' is not assignable to type 'string'.

// let varUnknown = 10;
// let newVar : string = varUnknown;//TS2322: Type 'number' is not assignable to type 'string', because TS recognizes, that var s type is number

let varUnknown: any = 10;
let newVar : string = varUnknown; //no problem here

newVar.foo();//TS2339: Property 'foo' does not exist on type 'string'.
varUnknown.goo()// no problem here*/
//--------------------------------------------------------------------------//
// 6.3. NEVER
//--------------------------------------------------------------------------//
/*
const foo = () : never => {
    // return "hello"; //error
    throw "hello"; //works
};*/
//--------------------------------------------------------------------------//
//6.2. ANY
//--------------------------------------------------------------------------//
/*
//the worse type, we would not get any Error no mater what we assign variable to
const foo: any = "Hello";
foo.bar() // no error message*/
//--------------------------------------------------------------------------//
//6.1. VOID
//--------------------------------------------------------------------------//
/*
// type void is used when function doesn't return anything
const returnNothing = (): void => {
    console.log("return Nothing")
    // return 1;//TS2322: Type 'number' is not assignable to type 'void'.
    // return null; //TS2322: Type 'null' is not assignable to type 'void'.
    return undefined;
}
returnNothing();*/
//**************************************************************************//
//5. TYPES AND UNIONS
//**************************************************************************//
//--------------------------------------------------------------------------//
//5.3. CUSTOM TYPE WITH UNION AND ALIAS
//--------------------------------------------------------------------------//
/*type Tag = string; //this is alias
type MaybeTag = Tag | null; // and this is a custom type combined of alias and union
const shapeTags: MaybeTag[] = ["round", null, "square", 7]//TS2322: Type 'number' is not assignable to type 'MaybeTag'.*/
//--------------------------------------------------------------------------//
//5.2. TYPE ALIASES
//--------------------------------------------------------------------------//
/*type Tag = string;//by using aliases you can create types with "human" meaning;
const colorTags: Tag[] = ["blue", "green", 5];//TS2322: Type 'number' is not assignable to type 'string'*/
//--------------------------------------------------------------------------//
//5.1. UNIONS
//--------------------------------------------------------------------------//
//used when variable may have two types, common use case - fetching data, than value is going to be ether Interface or null
/*
interface UserInterface {
    userName: string;
    age: number;
};

const user3: UserInterface | null = null;
const user4: UserInterface | null = {
    userName: "Kresinska",
    age: 27
}
console.log(user3);
console.log(user4);
*/
/*const user: {userName: string; age: number} | null= {
    userName: "Iryna",
    age: 27
};

user.age = 33;
user = null;//Attempt to assign to const or readonly variable

const user2: {userName: string; age: number} = null; //this shows no error, unless tsconfig is adjusted with "strictNullChecks": true,
const user3: {userName: string | null; age: number} = {
     userName: null,
     age: 7
 }; //this shows no error unless tsconfig is adjusted with "strictNullChecks": true,
console.log(user);
console.log(user2);*/
/*let pageNumber: number | string = 1;
console.log(pageNumber);
pageNumber = "10";
console.log(pageNumber);*/
//**************************************************************************//
// 4. OBJECTS IN TS
//**************************************************************************//
//--------------------------------------------------------------------------//
//4.2 METHODS IN OBJECTS WITH TS
//--------------------------------------------------------------------------//
/*
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
*/
//--------------------------------------------------------------------------//
//4.1 INTERFACES TO DESCRIBE OBJECT PROPERTIES TYPES
//--------------------------------------------------------------------------//
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
//**************************************************************************//
// 3. FUNCTIONS IN TS
//**************************************************************************//
// const getFullName = (name: string, surname: string):string => true; //TS2322: Type 'boolean' is not assignable to type 'string'., would not compile
var getFullName = function (name, surname) { return name + " " + surname; }; //TS2322: Type 'boolean' is not assignable to type 'string'., would not compile
console.log(getFullName("Ir", "K")); // compiles without error, prevents unexpected return values
/*const getFullName = (name: string, surname: string) => true; //no explicit type check of the returned value leads to bugs
console.log(getFullName("I", "K"))// shows true*/
/*//ts recognizes type of the returned value automatically
const getFullName = (name: string, surname: string) => name + " " + surname;
console.log(getFullName("I", 5));//TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(getFullName("I", "K"));//compiles without error, increases chances of proper function usage.*/
//**************************************************************************//
//2. CONST LET VAR IN TS
//**************************************************************************//
//ts performs an automatic type recognition but it's better to assign types explicitly
var hello = 'hello';
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
//**************************************************************************//
//1. BASIC PRINCIPALS
//**************************************************************************//
var a = "Hello Word";
console.log(a); // a is in console only after main.ts got recompiled to main.js, ts files can\'t be executed in browser
// console.log(a.foo())//TS2339: Property 'foo' does not exist on type '"a"', this code cant be transpiled, error in text editor and in the CL
//# sourceMappingURL=main.js.map