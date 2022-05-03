class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName (){
        console.log('my name is ${this.name}');
        return this;
    }

    showStats (){
        console.log('name:  ${this.name}');
        console.log('health: ${this.health}');
        console.log('Speed: ${this.speed}');
        console.log('strength: ${this.strength}');
        return this;
    }

    drinkSake (){
        console.log('${this.name} drank sake');
        this.health += 10;
        return this;
    }
    
}

    const ninja1 = new Ninja("meow meow");
    ninja1.sayName().showStats().drinkSake().showStats();
    console.log(ninja1)


