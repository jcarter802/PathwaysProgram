using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceExample
{
    public class VehicleService
    {
        private readonly IVehicle _vehicle;
        public VehicleService(IVehicle vehicle)
        {
            _vehicle = vehicle;
        }

        public void PrintVehicleData(string data)
        {
            _vehicle.PrintVehicleData(data);
        }
    }
}
