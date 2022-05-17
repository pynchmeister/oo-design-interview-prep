class Person {
  
constructor(name, age) {
  this.name = name;
  this.age = age;
  this.job = ""
  }
  
  getName = () => {
    return this.name;
  };
  
  getAge = () => {
    return this.age;
  };
  
  setJob = (job) => {
    this.job = job;
  }
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  
  getAddress = () => {
     return this.address;
  };
  
  getPrice = () => {
    return this.price;
  }
  
  getResident = () => {
    return this.residents;
  };
  
  addResident = (resident) => {
    this.residents.push(resident);
  }
}

let Pedro = new Person("Pedro", 19);
let house = new House("sjkcd), 2030, []);
house.addResident(Pedro);
Pedro.setJob("Developer")
console.log(house.getResidents());

// let Pedro = new Person("Pedro", 19);
// let David = new Person("David", 21);

// let house = new House("hciscnd", 280000, [Pedro, David]);
// console.log(house.getResident());

// let Paulo = new Person("Paulo", 19);
// house.addResident(Paulo);
// console.log(house.getResidents());

// let Person1 = new Person("Pedro", 19);
// let Person2 = new Person("Moise Keane", 19);
// console.log(Person1.getName());
// console.log(Person2.getName());
