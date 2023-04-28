using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    internal class BirdData
    {
        private string birdType = "";
        private double maxWeight = 0;
        private double uSpeed = 0;

        public BirdData(string type, double weight, double speed)
        {
            birdType = type;
            maxWeight = weight;
            uSpeed = speed;
        }

        public string Type { get { return birdType; } }
        public double MaxWeight { get {  return maxWeight; } }
        public double USpeed { get {  return uSpeed; } }

    }
}


//enum Bird
//{
//    Swallow = 5, // uSpeed, type, maxWeight
//    Eagle = 55,
//    Bluejay = 8,
//    Seagull = 20
//}