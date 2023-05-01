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
            Console.WriteLine(airspeedServiceBirdOne.DetermineSpeed(false, 2.3) + "\n");

            bird = new Swallow();
            AirspeedService airspeedServiceBirdTwo = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdTwo.DetermineSpeed(true) + "\n");
            Console.WriteLine(airspeedServiceBirdTwo.DetermineSpeed(false, 2.3) + "\n");

            bird = new Bluejay();
            AirspeedService airspeedServiceBirdThree = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdThree.DetermineSpeed(true) + "\n");
            Console.WriteLine(airspeedServiceBirdThree.DetermineSpeed(false, 10) + "\n");

            bird = new Eagle();
            AirspeedService airspeedServiceBirdFour = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdFour.DetermineSpeed(true) + "\n");
            Console.WriteLine(airspeedServiceBirdFour.DetermineSpeed(false, 17) + "\n");

            bird = new Seagull();
            AirspeedService airspeedServiceBirdFive = new AirspeedService(bird);
            Console.WriteLine(airspeedServiceBirdFive.DetermineSpeed(true) + "\n");
            Console.WriteLine(airspeedServiceBirdFive.DetermineSpeed(false) + "\n");

            Console.ReadLine();
        }
    }
}