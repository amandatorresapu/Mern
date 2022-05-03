// captial first letter as class name and singular!
//  constructor --> the things to do upon creation of a new olympian
class Olympian {
    constructor(nameInput, countryInput, heightInput){
        // we can define the properties that every olypiman will have upon creationg here inside of hte contstor
        this.name = nameInput;
        this.country = countryInput;
        this.height = heightInput;
        this.energyLevel = 100; // default value because every olympian will start off at it. 
    }
    //functionalities for an loympian will be defined using methods
    competeInEvent(){
       console.log("competeing in an event") 
       this.energyLevel -=5;
       return this;
    }
    
    takeIceBath() {
        console.log("awwwwww")
        this.energyLevel = 100;
        return this;

    }

    displayInfor() {
        let info = `hi my name is ${this.name} i am from ${this.country}`
        console.log(info);
        return this;

    }

}
//super means from the parent....
class Swimmer extends Olympian{
    constructor(nameInput,countryInput, heightInput, swimSpeedInput){
        super(nameInput,countryInput,heightInput) //super means do what hte parent constructor is doing this will allow the constructor of the swimmer class to reference the constructor of the parent olympian class to set the name, country and heigh just like the parent class did. We need this if we want to add our own uniquie attributes to the simmer class (like swim speed)
        this.swimSpeed = 99;
    }

}

let phelps = new Swimmer("Micheal phelps", "usa", "72")
// let phelps = new Swimmer("Micheal phelps", "usa", "72")
console.log(phelps)


// outside of hte class, we can create instances of the olympian, different people in the olympian
//o1 is the THIS in the constructor above. 

let o2 = new Olympian ("luka doncic", "Slovenia", "79");
let o3 = new Olympian ("Micheal phelps", "USA", "72");
let o4 = new Olympian ("Simone Biles", "USA", "60");

//instance doing the method, so only they get hit with it. to chain just add return this; to all methods
o2.competeInEvent().displayInfor();
// o3.competeInEvent()
// o4.competeInEvent()

// console.log(o2)
// console.log(o3)
// console.log(o4)