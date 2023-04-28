using System;

namespace MontyPython
{  
    public class Program
    {
        static void Main(string[] args)
        {
            IAirspeed bird = new Robin();
            AirspeedService airspeedServiceBirdOne = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdOne.DetermineSpeed(true) + "\n");
            bird = new Swallow();
            AirspeedService airspeedServiceBirdTwo = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdTwo.DetermineSpeed(false, 2.3) + "\n");
            //Console.WriteLine(airspeedServiceBird.DetermineSpeed(false, 5.5) + "\n");
            //Console.WriteLine(airspeedServiceBird.DetermineSpeed(false) + "\n");
            Console.ReadLine();
        }
    }
}