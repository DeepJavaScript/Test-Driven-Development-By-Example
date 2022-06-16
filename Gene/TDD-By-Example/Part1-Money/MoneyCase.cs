﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TDD_By_Example.Part1_Money
{
    [TestClass]
    public class MoneyCase
    {
        [TestMethod]
        public void TestMultiplication()
        {
            Dollar five = new Dollar(5);
            Dollar product = five.Times(2);
            Assert.AreEqual(10, product.Amount);
            product = five.Times(3);
            Assert.AreEqual(15, product.Amount);
        }

        [TestMethod]
        public void TestEquality()
        {
            Assert.IsTrue(new Dollar(5).Equals(new Dollar(5)));
        }
    }
}
