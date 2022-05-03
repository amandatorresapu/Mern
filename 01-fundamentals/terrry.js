class vehicle {
    constructor(manufactor, model, color) {
        this.miles = 0;
        this.manufactor = manufactor;
        this.model = model;
        this.color = color;
    }

    drive (){
        this.miles += 10;
    }
    

}
    const car = new vehicle("bmw", "m5", "blue");
    car.drive();
    console.log(car.miles);
    console.log(car.manufactor + " which is a nice car bro and has " + car.miles + " miles on it for only being 20 years old");