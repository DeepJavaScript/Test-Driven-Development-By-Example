using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TDD_By_Example
{
    [TestClass]
    public class MultiCurrencyMoney
    {
        [TestMethod]
        public void TestMultiplication()
        {
            Dollar five = new Dollar(5);
            five.Times(2);
            Assert.AreEqual(10, five.Amount);
        }
    }
}
