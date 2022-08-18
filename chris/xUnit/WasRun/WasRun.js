module.exports = class WasRun{
  constructor(name){
    this.wasRun = 'None'
    this.name = name;
  }
  
  testMethod(){
    this.wasRun = 1
  }

  run() {
    const method = this[this.name].bind(this);
    method()
  }
};


