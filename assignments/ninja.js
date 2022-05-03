class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName (){
        console.log(`my name is ${this.name}`);
        return this;
    }

    showStats (){
        console.log(`name:  ${this.name}`);
        console.log(`health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`strength: ${this.strength}`);
        return this;
    }

    drinkSake (){
        console.log(`${this.name} drank sake`);
        this.health += 10;
        return this;
    }

}
// child Sensi class
class Sensi extends Ninja {
    constructor(name, health=10, wisdom ) {
        super(name, health=10, wisdom);
        this.wisdom = 100;
    }
    // simple function in the child class
    speakWisdom() {
        this.widsom +=100;
        console.log(`What one programer can do in one month, two programers can do in two months..hoe`);
        return this;
    }
}
    let dojo1 = new Sensi("meow of the meow", health=10, 98);
    dojo1.sayName().speakWisdom();
    console.log(dojo1)
    

    let ninja1 = new Ninja("Amanda Meow");
    ninja1.sayName().showStats().drinkSake().showStats();
    console.log(ninja1)


