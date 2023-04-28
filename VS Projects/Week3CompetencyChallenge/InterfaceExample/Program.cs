using System;

namespace MontyPython
{  
    public class Program
    {
        static void Main(string[] args)
        {

            IAirspeed swallow = new Swallow();
            AirspeedService airspeedServiceSwallow = new AirspeedService(swallow);
            Console.WriteLine(airspeedServiceSwallow.DetermineSpeed(true) + "\n");
            Console.WriteLine(airspeedServiceSwallow.DetermineSpeed(false, 2.3) + "\n");
            Console.WriteLine(airspeedServiceSwallow.DetermineSpeed(false, 5.5) + "\n");
            Console.WriteLine(airspeedServiceSwallow.DetermineSpeed(false) + "\n");
            Console.ReadLine();
        }
    }
}