using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TDD_By_Example.Part1_Money
{
    [TestClass]
    public class MoneyCase
    {
        [TestMethod]
        public void TestMultiplication()
        {

            Money five = Money.dollar(5);
            Assert.AreEqual(Money.dollar(10), five.Times(2));
            Assert.AreEqual(Money.dollar(15), five.Times(3));
        }

        [TestMethod]
        public void TestFrancMultiplication()
        {
            Franc five = Money.franc(5);
            Assert.AreEqual(Money.franc(10), five.Times(2));
            Assert.AreEqual(Money.franc(15), five.Times(3));
        }

        [TestMethod]
        public void TestEquality()
        {
            Assert.IsTrue(Money.dollar(5).Equals(Money.dollar(5)));
            Assert.IsFalse(Money.dollar(5).Equals(Money.dollar(6)));
            Assert.IsTrue(Money.franc(5).Equals(Money.franc(5)));
            Assert.IsFalse(Money.franc(5).Equals(Money.franc(6)));
            Assert.IsFalse(Money.franc(5).Equals(Money.dollar(5)));
        }
    }
}
