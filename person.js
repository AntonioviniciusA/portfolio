class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyname() {
    return `hello, my name is ${this.name}`;
  }
}

module.exports = {
  Person,
};
