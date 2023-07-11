class Ninja {
    constructor() {
        this.name = "Kun Fu Panda";
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Soy Kun Fu Panda!");
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Healt: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log("Mi salud aumento a ");
    }
}
