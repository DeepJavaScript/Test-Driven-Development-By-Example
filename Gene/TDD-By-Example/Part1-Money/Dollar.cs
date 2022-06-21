using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDD_By_Example
{
    class Dollar
    {
        private int Amount;

        public Dollar(int amount)
        {
            this.Amount = amount;
        }

        public Dollar Times(int multiplier)
        {
            return new Dollar(this.Amount * multiplier);
        }

        public override bool Equals(object obj)
        {
            Dollar dollar = (Dollar)obj;
            return this.Amount == dollar.Amount;
        }
    }

    class Franc
    {
        private int Amount;

        public Franc(int amount)
        {
            this.Amount = amount;
        }

        public Franc Times(int multiplier)
        {
            return new Franc(this.Amount * multiplier);
        }

        public override bool Equals(object obj)
        {
            Franc dollar = (Franc)obj;
            return this.Amount == dollar.Amount;
        }
    }
}
