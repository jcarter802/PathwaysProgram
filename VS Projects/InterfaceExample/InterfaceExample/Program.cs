using System;

namespace InterfaceExample
{
    public class Program
    {
        static void Main(string[] args)
        {

            IVehicle sportsBike = new SportsBike();
            VehicleService vehicleServiceOne = new VehicleService(sportsBike);
            vehicleServiceOne.PrintVehicleData("Ducati");
            Console.ReadLine();
        }
    }
}