using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    public class Calculate
    {
        public static double[] CalculateAirspeed(double airspeed, double maxWeight, double objectWeight)
        {
            double[] response = new double[2];

            if (objectWeight > maxWeight)
            {
                response[0] = 2;
                airspeed = 0;
            }
            else
            {
                if (objectWeight > 0 && objectWeight <= maxWeight)
                {
                    response[0] = 1;
                }
                else
                {
                    objectWeight = 1;
                    response[0] = 3;
                }
                airspeed = Math.Round(airspeed - (airspeed * (objectWeight / maxWeight)), 3);
            }
            response[1] = airspeed;
            
            return response;
        }
    }
}
