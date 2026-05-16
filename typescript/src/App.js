"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Basic variable declarations with inferred types
var a = 12;
var pokemon = "pikachu";
var isAlive = true;
var myArray = [1, 2, 3, 4, 5];
var myTuple = [1, "hello", true];
// Enum: Defines a set of named constants. Numeric values auto-increment if not specified.
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["First"] = 1] = "First";
    MyEnum[MyEnum["Second"] = 2] = "Second";
})(MyEnum || (MyEnum = {}));
// 'any' type: Allows any value, disabling type checking. Useful for dynamic data but risky.
let myVariable;
myVariable = 10;
myVariable = "now I'm a string";
myVariable = true;
// 'unknown' type: Type-safe alternative to 'any'; requires type checks before use.
let anotherVariable;
anotherVariable = 10;
anotherVariable = "now I'm a string";
anotherVariable = true;
// Union types: Allow variables to hold values of multiple specified types.
let myUnion;
myUnion = 10;
myUnion = "now I'm a string";
// myUnion = true; // Error: 'boolean' not in union 'number | string'
// Literal types: Restrict values to specific literals.
const myLiteral = "hello";
// myLiteral = "world"; // Error: Only "hello" allowed
let myLiteralUnion;
myLiteralUnion = "hello";
myLiteralUnion = "world";
// myLiteralUnion = "hi"; // Error: "hi" not in literal union
// Tuples: Arrays with fixed length and types for each position.
let arr = [12, "rishi", true];
// String enums: Use strings as values for better readability.
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPERADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
// Accessing enum values
UserRole.ADMIN; // "admin"
UserRole.GUEST; // "guest"
UserRole.SUPERADMIN; // "super_admin"
// 'any': Allows any type, bypassing type checks. Use cautiously to avoid runtime errors.
//let a: any;
//a = 10;// This is valid because 'a' is of type 'any' and can hold any value without type checking.
// a = "now I'm a string";// This is valid because 'a' is of type 'any' and can hold any value without type checking.
//a = true;// This is valid because 'a' is of type 'any' and can hold any value without type checking.
// 'unknown' with type guard: Check type before operations.
let b;
b = 10;
b = "now I'm a string";
b = true;
if (typeof b === "string") {
    console.log(b.toUpperCase()); // Safe: b is confirmed as string
}
// b.toUpperCase(); // Error: b is unknown, no type check
// 'void': Functions that don't return a value, perform side effects.
function logMessage(message) {
    console.log(message);
}
function add(a, b) {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
}
add(5, 10); // Calls add, which logs the sum
// 'null': Represents intentional absence of value.
let firstVariable = null;
let secondVariable = null;
// 'undefined': Default for uninitialized variables.
let undefinedVariable; // undefined
let secondUndefinedVariable; // undefined
// 'never': For functions that never return (e.g., throw errors).
function throwError(message) {
    throw new Error(message);
}
// throwError("Error!"); // Would throw, never returns
// Type inference: TS automatically assigns types based on values.
let trueVariable = 10; // Inferred: number
// More inference examples
let inferredString = "Hello, TypeScript!"; // string
let inferredNumber = 42; // number
// Type annotations: Explicitly specify types for clarity and safety.
let annotatedVariable = 10;
// annotatedVariable = "error"; // Type error
// Function with annotations
function addNumbers(a, b) {
    return a + b;
}
// Function using interface
function greet(person) {
    return `Hello, ${person.name}! You are ${person.age} years old. Your email is ${person.email}. Your gender is ${person.gender}.`;
}
// Function using extended interface
function abcd(obj) {
    obj.adminLevel; // Access extended property
}
// Function using merged interface
function abc(obj) {
    obj.name; // Merged properties
    obj.age;
}
let userId;
userId = "abc123"; // Valid: string
userId = 456; // Valid: number
function abd(obj) { }
abd("hello"); // Valid: string
abd(123); // Valid: number
// abd(true); // Error: not in union
//what is union types
// Union types in TypeScript allow you to define a variable that can hold values of multiple types. A union type is created using the pipe (|) symbol to separate the different types that a variable can accept. This is useful when you want to allow for flexibility in the types of values a variable can hold while still maintaining type safety. In the example below, we have defined a union type called 'Operation' that can be either a string or a number. This means that any variable of type 'Operation' can hold either a string value or a number value, but not both at the same time.
let ten; //this variable can hold either a string or a number value, but not both at the same time.the line in the center is called union type because it allows for multiple types to be assigned to a single variable. In this case, the variable 'b' can hold either a string or a number, but not both at the same time. This provides flexibility while still maintaining type safety, as TypeScript will enforce that only the specified types can be assigned to the variable.
ten = "hello"; // This is valid because 'b' can hold a string value.
function five(a) {
    a.name; // This is valid because 'ofAdmin' includes all properties of 'ofUser', which has the 'name' property.
    a.getDetails("rishi"); // This is valid because 'ofAdmin' includes the 'getDetails' method defined in the intersection type.
}
/*  Classes and Objects
      Consturctors
      Acess Modifiers (public, private, protected)
      Readonly properties
      Optional properties
      Parameter properties
      Getters and Setters
      Static members
      Abstract classes and methods*/
// this is a example of a class in typescript
class Device {
    name = "laptop";
    price = 1000;
    category = "electronics";
}
let d1 = new Device();
let d2 = new Device();
console.log(d1); // Output: laptop
console.log(d2); // Output: laptop
// this is a example of a class with constructor in typescript
///What is class definition in typescript
// A class definition in TypeScript is a blueprint for creating objects that encapsulate data and behavior. It defines the properties and methods that the objects created from the class will have. A class can include
/*- Properties: Variables that hold data related to the class.
- Methods: Functions that define the behavior of the class.
- Constructors: Special methods that are called when an object is instantiated, used to initialize properties.
- Access Modifiers: Keywords like public, private, and protected that control the visibility of properties and methods.
- Static Members: Properties and methods that belong to the class itself rather than to instances of the class.*/
//what is constructor in typescript
// A constructor in TypeScript is a special method that is automatically called when an instance of a class is created. It is used to initialize the properties of the class and set up any necessary state for the object. The constructor can take parameters to allow for dynamic initialization of the object's properties. In TypeScript, you can also use parameter properties in the constructor to automatically create and initialize class properties from constructor parameters.
//ek aisi machine jo ki produce kr rhi hai final consumable product ko, us machine ke andar ek aisi process chal rhi hai jisme raw material ko final product me convert kiya ja rha hai, us process ko constructor kehte hai. Constructor ek special method hota hai jo class ke andar define kiya jata hai aur jab bhi class ka object create kiya jata hai to constructor automatically call ho jata hai. Constructor ke andar hum class ke properties ko initialize karte hai aur agar hume kisi specific value se initialize karna hai to hum constructor ke parameters ka use kar sakte hai. Is tarah se constructor hume ek structured way provide karta hai jisme hum apne class ke objects ko initialize kar sakte hai.
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("milton", 1200); // This will call the default constructor of the BottleMaker class, which is automatically provided by TypeScript if no constructor is defined.
let b2 = new BottleMaker("cello", 800); // This will also call the default constructor of the BottleMaker class, initializing the name and price properties with the provided values.
class humanMarker {
    name;
    isHandsome;
    age;
    constructor(name, isHandsome, age = 20) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = age;
    }
}
let h1 = new humanMarker("rishi", true);
let h2 = (h1.name = "rajveer"); // This will change the name property of the h1 object to "rajveer". Since the name property is public, it can be accessed and modified directly from outside the class.
//what is this keyword in typescript
// The 'this' keyword in TypeScript refers to the current instance of a class. It is used within class methods to access properties and
// other methods of the same class. The value of 'this' is determined by how a function is called, and it can refer to different objects
// depending on the context. In a class method, 'this' typically refers to the instance of the class that is invoking the method, allowin
// g you to access and manipulate the instance's properties and other methods.
//for example:
class Person {
    name = "rishi";
    changeName(newName) {
        console.log(this.name); // Accessing the current name property using 'this'
        this.changeSomestuff(); // Calling another method of the class using 'this'
        this.name = newName; // Updating the name property using 'this'
    }
    changeSomestuff() {
        console.log("hey");
    }
}
//What is deffecnce between public, private and protected in typescript
// In TypeScript, access modifiers (public, private, and protected) are used to control the visibility and accessibility of class members (properties and methods).
// - Public: Members marked as public are accessible from anywhere, both inside and outside the class. This is the default access level if no modifier is specified.
// - Private: Members marked as private are only accessible within the class they are defined in. They cannot be accessed or modified from outside the class, including subclasses.
// - Protected: Members marked as protected are accessible within the class they are defined in and also in any subclasses (derived classes). However, they cannot be accessed from outside the class hierarchy.
// Example:
// public
class PublicExample {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changing() {
        this.name = "new name"; // Accessible and modifiable from anywhere
    }
}
let publicObj = new PublicExample("rishi");
console.log(publicObj.name); // Accessible from outside the class
// private
class PrivateExample {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changeName(newName) {
        this.name = newName; // Accessible and modifiable only within the class
    }
}
let privateObj = new PrivateExample("rishi");
// console.log(privateObj.name); // Error: 'name' is private and only accessible within the class
privateObj.changeName("new name"); // Allowed, as it's a method of the class
// protected
class ProtectedExample {
    name;
    constructor(name) {
        this.name = name;
        this.name = name; // Accessible within the class and subclasses
    }
}
class Subclass extends ProtectedExample {
    changeName(newName) {
        // This method is defined in the subclass, which extends the ProtectedExample class. It allows us to change the value of the 'name' property, which is marked as protected in the parent class.
        this.name = newName; // Accessible and modifiable within the subclass
    }
}
let protectedObj = new ProtectedExample("rishi");
let subclassObj = new Subclass("rishi");
// console.log(protectedObj.name); // Error: 'name' is protected and only accessible within the class and subclasses
///What is extends keyword in typescript
// The 'extends' keyword in TypeScript is used to create a new class that inherits properties and methods from an existing class. This is a fundamental concept in object-oriented programming known as inheritance. When a class extends another class, it can reuse the code of the parent class, and it can also add its own properties and methods or override existing ones. This promotes code reusability and helps in creating a hierarchical relationship between classes.
// Example of using 'extends' keyword:
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class (Animal) to initialize the name property
        this.breed = breed;
    }
}
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
//what is Readonly properties in typescript
// Readonly properties in TypeScript are properties that can only be assigned a value once, either at the time of declaration or within the constructor of a class.
// Once a value is assigned to a readonly property, it cannot be changed or reassigned. This is useful for creating immutable objects or ensuring that certain properties remain constant throughout the lifecycle of an object.
//  To declare a readonly property, you use the 'readonly' keyword before the property name in a class.
//for example:
class Car {
    make;
    constructor(make) {
        this.make = make;
        this.make = make; // The 'make' property is assigned a value in the constructor and cannot be changed afterward
    }
    chnging() {
        // this.make = "new make"; // Error: Cannot assign to 'make' because it is a read-only property
    }
}
let myCar = new Car("Toyota");
console.log(myCar.make); // Output: Toyota
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property
//what is optional properties in typescript
// Optional properties in TypeScript are properties that may or may not be present in an object.
// They are denoted by a question mark (?) after the property name in an interface or class definition.
//  Optional properties allow for more flexible object structures, as they can be omitted when creating an instance of a class or when defining an object that implements
// an interface. This is particularly useful when dealing with data that may not always have all properties defined, such as user input or API responses.
// Example of optional properties in TypeScript:
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name; // 'name' is a required property
        this.age = age; // 'age' is an optional property, it can be undefined if not provided
    }
}
let user1 = new User("Alice"); // Valid: 'age' is optional
let user2 = new User("Bob", 30); // Valid: 'age' is provided
//what is parameter properties in typescript
// Parameter properties in TypeScript are a shorthand syntax for declaring and initializing class properties directly within the constructor parameters. By using access modifiers (public, private, protected) in the constructor parameters, you can automatically create and initialize class properties without having to write separate property declarations and assignments. This feature helps to reduce boilerplate code and makes class definitions more concise.
// Example of parameter properties in TypeScript:
class Employee {
    name;
    id;
    department;
    constructor(
    //this is the parameter properties in typescript, it allows us to declare and initialize class properties directly in the constructor parameters, which helps to reduce boilerplate code and makes the class definition more concise.
    name, // This creates a public property 'name' and initializes it with the value passed to the constructor
    id, // This creates a private property 'id' and initializes it with the value passed to the constructor
    department) {
        this.name = name;
        this.id = id;
        this.department = department;
        let emp2 = new Employee("Charlie", 789, "IT"); // This is valid because 'id' is a private property and can be accessed and modified within the class
    }
}
let emp1 = new Employee("Alice", 123); // Valid: 'department' is optional
let emp3 = new Employee("Bob", 456, "HR"); // Valid: 'department' is provided
//what is getters and setters in typescript
// Getters and setters in TypeScript are special methods that allow you to control access to the properties of a class. A getter is a method that retrieves the value of a property, while a setter is a method that sets or updates the value of a property. They provide a way to encapsulate the internal state of an object and can include additional logic for validation, transformation, or side effects when getting or setting a property. Getters and setters are defined using the 'get' and 'set' keywords, respectively.
// Example of get and set in TypeScript:
class Product {
    _name;
    _price;
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    get price() {
        return this._price;
    }
    set name(value) {
        this._name = value;
    }
}
let product1 = new Product("Laptop", 1000);
console.log(product1.price); // Output: 1000
//what is static members in typescript
// Static members in TypeScript are properties and methods that belong to the class itself rather than to instances of the class. They are defined using the 'static' keyword and can be accessed directly on the class without needing to create an instance. Static members are often used for utility functions, constants, or to maintain state that is shared across all instances of the class.
// Example of static members in TypeScript:
class MathUtils {
    static version = "1.0"; // this is a static property that belongs to the MathUtils class and can be accessed without creating an instance of the class.like new keyword is used to create an instance of a class, static members can be accessed directly on the class itself without needing to create an instance. In this example, we can access the static property 'version' and the static method 'getRandomNumber' directly on the MathUtils class, like MathUtils.version and MathUtils.getRandomNumber(), without needing to create an instance of MathUtils.
    static getRandomNumber() {
        // Static method
        return Math.random();
    }
}
new MathUtils(); // This is not necessary to access static members, but it can be done if needed.
console.log(MathUtils.version); // Output: 1.0
console.log(MathUtils.getRandomNumber()); // Output: A random number between 0 and 1
//what is abstract classes and methods in typescript
// Abstract classes in TypeScript are classes that cannot be instantiated directly and are meant to be subclassed.
// They can contain both implemented methods and abstract methods. Abstract methods are methods that are declared but not implemented in the abstract class; they must be implemented by any non-abstract subclass.
// Abstract classes are useful for defining a common base class with shared functionality while enforcing that certain methods must be implemented by subclasses.
//for example:
class Payment {
    amount;
    account;
    //this class is creater for only extends usages not for new keyword usage, because it is an abstract class and cannot be instantiated directly. The purpose of this class is to provide a common structure and functionality for any subclasses that extend it, such as the 'paytm' class in this example. The 'isPaymentValid' method can be used by any subclass to check if the payment amount is valid, while the constructor allows subclasses to initialize the 'amount' and 'account' properties when they are created.
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class paytm extends Payment {
}
//another example of abstract class and method in typescript
class cookingEssentials {
    gas;
    gasKaName;
    //this class is created for only extends usages not for new keyword usage, because it is an abstract class and cannot be instantiated directly. The purpose of this class is to provide a common structure and functionality for any subclasses that extend it, such as the 'pan' class in this example. The constructor allows subclasses to initialize the 'gas' and 'gasKaName' properties when they are created, while any methods defined in the 'cookingEssentials' class can be used by the 'pan' class or any other subclass that extends it.
    constructor(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
}
class sabji extends cookingEssentials {
}
class cake extends cookingEssentials {
}
/// Introduction to functions in TypeScript
// Functions in TypeScript are blocks of reusable code that perform a specific task.
//  They can take parameters, return values, and have their own scope.
// TypeScript allows you to define the types of parameters and return values for functions,
// which helps catch errors at compile time and improves code readability.
// Functions can be defined using function declarations, function expressions, or arrow functions.
//  They can also be assigned to variables, passed as arguments to other functions, and returned from functions.
//Functions
/*Function types
Optional and default parameters
Rest parameters
overloads*/
// Function types in TypeScript allow you to specify the types of parameters and return values for functions. This helps catch errors at compile time and improves code readability. You can define function types using type annotations, interfaces, or type aliases. Function types can also include optional parameters, default parameters, rest parameters, and overloads to provide flexibility in how functions are called and used in your code.
// Example of function types in TypeScript:
function adbde(name, age, cb) {
    cb("rishi");
}
adbde("rajveer", 21, (arg) => {
    console.log(arg); // Output: rishi
});
//Optional and default parameters in TypeScript allow you to define function parameters that may not be required when calling the function. Optional parameters are denoted by a question mark (?) after the parameter name, while default parameters are assigned a default value in the function definition. This provides flexibility in how functions can be called, allowing you to omit optional parameters or rely on default values when necessary.
// Example of optional and default parameters in TypeScript:
//optional parameter
function student(name, age) { }
student("Alice"); // Valid: 'age' is optional
student("Bob", 20); // Valid: 'age' is provided
student("Charlie", 30); // Valid: 'age' is provided
//default parameter
function hi(name, gender = "not to be disclosed") {
    console.log(`${gender}, ${name}!`);
}
hi("Alice"); // Output: not to be disclosed, Alice!
hi("Bob", "Male"); // Output: Male, Bob!
// Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array. They are denoted by three dots (...) followed by the parameter name. Rest parameters must be the last parameter in a function definition, and they enable you to handle functions that can accept varying numbers of arguments without needing to define multiple overloads or use the 'arguments' object.
// Example of rest parameters in TypeScript:
function rest(...numbers) { }
rest(1, 2, 3); // Valid: numbers will be [1, 2, 3]
rest(4, 5); // Valid: numbers will be [4, 5]
rest(); // Valid: numbers will be []
//difference between rest parameters and spread operator in typescript
// Rest parameters and the spread operator in TypeScript are related concepts but serve different purposes. Rest parameters allow a function to accept an indefinite number of arguments as an array, while the spread operator is used to expand an iterable (like an array) into individual elements. Rest parameters are defined in function signatures to collect multiple arguments, whereas the spread operator is used in function calls or array literals to unpack elements from an array or object.
//Example of spread operator in TypeScript:
const sum = (a, b, c) => {
    return a + b + c;
};
let spread = [1, 2, 3]; //like this or like after this line i gave the second example for this
console.log(sum(...spread)); // Output: 6
// 2. Implementation signature
// Change: The return type must accommodate both 'void' and 'string'
function six(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
        // returns void implicitly
    }
    else if (typeof a === "string" && typeof b === "string") {
        // Fix: You must return a string to match the second overload
        return "123";
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// 3. Execution
six("hello"); // Output: hey
const result = six("hello", "world"); // Output: "123"
//function overloads with union types in typescirpt
function formatInput(input) {
    if (typeof input === "number") {
        return `ID: ${input.toFixed(2)}`;
    }
    return input.trim().toUpperCase();
}
console.log(formatInput(101));
console.log(formatInput(" hello "));
//Gneric
/*Generic functions
Generic classes
generic interfaces */
//Humein ek function bnana hai jo ki accept karega koi bhi value and usey print karega
//hum ek function ko use krte waqt bata skte hai ki function argument ko kis type se treat kare
//What is generic in typescript
// Generics in TypeScript are a powerful feature that allows you to create reusable components and functions that can work with any data type while still maintaining type safety.
//  A generic is defined using angle brackets (<>) and can be used to specify a placeholder for a type that will be provided when the function or class is used.
//  This allows you to write code that can operate on different types without sacrificing the benefits of static typing, such as type checking and autocompletion.
//example of generic function in typescript
function identity(arg) {
    return arg;
}
identity("Hello, TypeScript!"); // Output: "Hello, TypeScript!"
identity(42); // Output: 42
function abcdef(obj) {
    console.log(obj.name); // Output: "My Box"
}
abcdef({ name: "My Box", value: "This is a string", age: null }); // Output: "My Box"
//example of generic class in typescript
class Boxs {
    name;
    gender;
    isstudent;
    age;
    // This class 'Boxs' is a generic class that can work with any type specified by the type parameter 'T'. The properties of the class include 'name
    constructor(
    // The constructor of the 'Boxs' class takes four parameters
    name, gender, // The 'gender' parameter has a default value of "male", which means that if no value is provided for 'gender' when creating an instance of the 'Boxs' class, it will automatically be set to "  male".
    isstudent, age) {
        this.name = name;
        this.gender = gender;
        this.isstudent = isstudent;
        this.age = age;
    }
}
class Container extends Boxs {
    name;
    value;
    size;
    // This class 'Container' is a generic class that extends another generic class 'Boxs'. The 'Container' class inherits all the properties and methods of the 'Boxs' class, and it can
    constructor(name, value, size) {
        super(name, "male", false, 75); // The 'super' keyword is used to call the constructor of the parent class 'Boxs' and initialize its properties with specific values. In this case, the 'name' property is set
        this.name = name;
        this.value = value;
        this.size = size;
    }
}
let stringContainer = new Container(// This creates an instance of the 'Container' class with the type parameter 'T' set to 'string'. The constructor of the 'Container' class is called with specific arguments to initialize the properties of the instance.
"This is a name from  Container", "This is a container value!<T>", 89);
console.log(stringContainer.name);
console.log(stringContainer.gender);
console.log(stringContainer.age);
console.log(stringContainer.isstudent);
//sceond example of generic class in typescript
class bottle {
    key;
    constructor(key) {
        this.key = key;
    }
}
let c1 = new bottle("hey");
let c2 = new bottle(123);
//what corn in <T> is that
/*  function abcd<T>(a:T,b:T):T{//
return "hey"//this is error in typescript
return "hay"as T//This is true for typescript
return<T>"hay"//This is also true in typescript


}

abcd<string>("hey","hello");*/
function ytug(a, b) {
    if (typeof a === "string") {
        a.toUpperCase();
    }
    return a;
}
ytug("hey", "hello");
//what is exporting and importing modules
const payment_1 = require("./payment");
(0, payment_1.addPayment)(34);
(0, payment_1.gerDetails)();
//
//this is Default export
const payment_2 = __importDefault(require("./payment"));
let Payments = new payment_2.default("rishi", 758);
let PaymesntOne = new payment_2.default("rajveer", 78);
console.log(Payments, PaymesntOne);
//Type Assertion
//Type casting
//Non-null assertion operator
//what is type assertion
//In TypeScript, type assertion is a mechanism that tells the compiler you know more about the type of a value than it can infer on its own. It's like a "trust me, i know what i'm doing"signal to the system.
//How it works
//When you use type assertion, you are not changing the data itself (id doesn't perform any runtime conversion or"casting").
//instead, you are providing a hint to the Typescript compilar during development so it stops showing type errors.
//for exampe with syntax
let typeAssertion = 12;
typeAssertion.toFixed(2); //example of type assertion
//(<number>typeAssertion).toFixed(2);//this is also a example of typs assertion with generic
//what is type casting
//In the world of programming , type casting is the process of converting value from one data type to another (for example, turning the string "10" into the number number 10.)
let casting = Number("245");
console.log(typeof casting); // out is number
console.log(casting);
//what is non-null assertion operator
//In TypeScript, Non-null Assertion Operator is a way to tell the compiler that an expression is definitley not null or undefined, even when type checker think it might be.
//for example with syntax 
let nonNUll;
nonNUll = "here will not put null and undefined only use string her because we put data type string up ther in nonNull with other";
//nonNUll  !.  THIS IS THE SYNTAX FOR NON-NULL ASSERTION OPERATOR
///TYPE GUARDS AND TYPESCRIPT UTILITY TYPES
// USING TYPEOF AND INSTANCEOF 
//  PARTIAL, REQUIRED, READONLY.
//WHAT IS TYPE GUARDS AND TYPESCRIPT UTILITY TYPES
//for exampel with syntax
//type guards ---> type narrowing // here we use (if esle)
//first example
function guard(agr) {
    if (typeof agr === "string") {
        return "string";
    }
    else if (typeof agr === "number") {
        return "number";
    }
    else {
        throw new Error("Pagal how gaya hai kya fraaaaands");
    }
}
console.log(guard(12));
console.log(guard("hello"));
console.log(guard(true));
//seconde example with object and instanceof
class tykaRemote {
    switchtv() {
        console.log("switching off tv");
    }
}
class carkaRemote {
    switchcar() {
        console.log("switching off car");
    }
}
const tv = new tykaRemote();
const car = new carkaRemote();
function switchoffKaro(device) {
    if (device instanceof tykaRemote) {
        device.switchtv();
    }
    else if (device instanceof carkaRemote) {
        device.switchcar();
    }
}
console.log(switchoffKaro(tv));
//# sourceMappingURL=App.js.map