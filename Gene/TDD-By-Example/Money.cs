using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDD_By_Example
{
    abstract class Money
    {
        protected int Amount;
        abstract public Money Times(int multiplier);

        static public Money dollar(int amount)
        {
            return new Dollar(amount);
        }

        public override bool Equals(object obj)
        {
            Money money = (Money)obj;
            return this.Amount == money.Amount
                && this.GetType().Name.Equals(money.GetType().Name);
        }
    }
}
