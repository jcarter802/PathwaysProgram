using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    public class AirspeedService
    {
        private readonly IAirspeed _bird;
        public AirspeedService(IAirspeed bird)
        {
            _bird = bird;
        }

        public string DetermineSpeed(bool unladen, double objectWeight = 0)
        {
            return _bird.DetermineSpeed(unladen, objectWeight);
        }
    }
}
