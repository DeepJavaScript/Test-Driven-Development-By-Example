using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TDD_By_Example.Part1_Money
{
    [TestClass]
    public class DegenerateObjects
    {
        [TestMethod]
        public void TestMultiplication()
        {
            Dollar five = new Dollar(5);
            five.Times(2);
            Assert.AreEqual(10, five.Amount);
            five.Times(3);
            Assert.AreEqual(15, five.Amount);
        }
    }
}
