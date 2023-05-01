using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    public class BirdData
    {
        private double maxWeight = 0;
        private double uSpeed = 0;

        public BirdData(double weight, double speed)
        {
            maxWeight = weight;
            uSpeed = speed;
        }

        public double MaxWeight { get {  return maxWeight; } }
        public double USpeed { get {  return uSpeed; } }

    }
}
