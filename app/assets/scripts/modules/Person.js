class Person{
    constructor(name, favColor){
        this.name = name;
        this.favColor = favColor;
    }

    greet(){
        console.log("Greetings, my name is " + this.name + ". My favorite color is " + this.favColor + ".")
    }
}

// function Person(fullName, favColor){
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function(){
//         console.log("Greetings, my name is " + this.name + ". My favorite color is " + this.favoriteColor + ".")
//     }
// }

export default Person