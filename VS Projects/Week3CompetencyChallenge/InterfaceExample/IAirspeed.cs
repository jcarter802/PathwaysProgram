using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    public interface IAirspeed
    {
        public string DetermineSpeed(bool unladen, double objectWeight = 0);
    }
}
