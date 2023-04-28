using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceExample
{
    internal class SportsBike : IVehicle
    {

        public void PrintVehicleData(string Make)
        {
            Console.WriteLine("Sports Bike Manufacturer: " + Make);
        }

        public void PrintModel(string Model)
        {
            Console.WriteLine("Model: {0}", Model);
        }
    }
}
