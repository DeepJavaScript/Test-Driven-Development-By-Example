module.exports = class WasRun{
  constructor(name){
    this.wasRun = 'None'
  }
  
  testMethod(){
    this.wasRun = 1
  }

  run(){
    this.testMethod()
  }
};


