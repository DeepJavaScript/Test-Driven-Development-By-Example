using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDD_By_Example
{
    class Dollar
    {
        public int Amount;

        public Dollar(int amount)
        {
            this.Amount = amount;
        }

        public void Times(int multiplier)
        {
            this.Amount = this.Amount * multiplier;
        }
    }
}
