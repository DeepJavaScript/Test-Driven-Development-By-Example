class WasRun:
  def __init__(self, name):
    self.wasRun = None
  
  def testMethod(self):
    self.wasRun = 1
  def run(self):
    self.testMethod()