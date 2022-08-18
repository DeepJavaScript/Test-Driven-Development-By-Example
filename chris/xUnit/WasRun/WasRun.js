class TestCase {
  constructor(name) {
    this.name = name;
  }

  run() {
    const method = this[this.name].bind(this);
    method()
  }
}

module.exports = class WasRun extends TestCase{
  constructor(name) {
    super(name)
    this.wasRun = 'None'
  }
  
  testMethod(){
    this.wasRun = 1
  }

};


