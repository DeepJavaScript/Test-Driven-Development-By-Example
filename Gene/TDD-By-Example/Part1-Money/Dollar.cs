using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDD_By_Example
{

    class Dollar : Money
    {
        internal Dollar(int amount)
        {
            this.Amount = amount;
            this.Currency = "USD";
        }

        public override Money Times(int multiplier)
        {
            return Money.dollar(this.Amount * multiplier);
        }
    }

    class Franc : Money
    {
        public Franc(int amount)
        {
            this.Amount = amount;
            this.Currency = "CHF";
        }

        public override Money Times(int multiplier)
        {
            return Money.franc(this.Amount * multiplier);
        }
    }
}
