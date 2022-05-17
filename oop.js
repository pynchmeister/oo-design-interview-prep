class Person {
  
constructor(name, age) {
  this.name = name;
  this.age = age;
  }
  
  getName = () => {
    return this.name;
  };
  
  getAge = () => {
    return this.age;
  };
}

let Person1 = new Person("Pedro", 19);
console.log(Person1.name);
