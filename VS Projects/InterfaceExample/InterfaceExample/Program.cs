using System;

namespace InterfaceExample
{
    public interface ISportsBike
    {
        void PrintVehicleData();
    }
    public interface IRoadster
    {
        void PrintVehicleData();
    }

    public interface IponyCar
    {
        void PrintVehicleData();
    }

    public class VehicleInfo
    {
        int id;
        string make;
        string model;
        List<string>? features;

        public VehicleInfo(int newID, string newMake, string newModel, List<string>? newFeatures)
        {
            id = newID;
            make = newMake;
            model = newModel;
            if (newFeatures != null)
            {
                features = newFeatures;
            }
        }

        public int ID    // property
        {
            get { return id; }
            set { id = value; }
        }

        public string Make   // property
        {
            get { return make; }
            set { make = value; }
        }

        public string Model   // property
        {
            get { return model; }
            set { model = value; }
        }

        public List<string> Features
        {
            get { return features.ToList(); }
            set { features = value; }
        }

        public override string ToString()
        {
            string stringOfFeatures = string.Empty;
            if (features != null)
            {
                stringOfFeatures = ", Features: ";
                for (int i = 0; i < features.Count; i++)
                {
                    stringOfFeatures += features[i];
                    if (i != features.Count - 1)
                    {
                        stringOfFeatures += ", ";
                    }
                }
            }
            return "ID: " + ID.ToString() + ", Make: " + Make.ToString() + ", Model: " + Model + stringOfFeatures;
        }

    }

    public class Vehicle : IRoadster, IponyCar, ISportsBike
    {
        private VehicleInfo theVehicle;

        public Vehicle(int newID, string newMake, string newModel, List<string>? newFeatures = null)
        {
            theVehicle = new VehicleInfo(newID, newMake, newModel, newFeatures);
        }


        void ISportsBike.PrintVehicleData()
        {
            Console.WriteLine("Sports Bike Manufacturer: " + theVehicle.Make);
        }

        void IRoadster.PrintVehicleData()
        {
            Console.WriteLine("Roadster Manufacturer: " + theVehicle.Make);
        }

        void IponyCar.PrintVehicleData()
        {
            Console.WriteLine("Pony Car Manufacturer: " + theVehicle.Make);
        }


        public override string ToString()
        {
            return theVehicle.ToString();
        }

    }

    public class Program
    {
        static void Main(string[] args)
        {
            List<string> sportsBikeFeatures = new List<string>{ "8,800 RPM Redline", "Aluminum Frame", "V4 Engine" };
            List<string> roadsterFeatures = new List<string> { "Convertible", "Rear-Wheel Drive", "Manual Transmission"};
            //List<string> ponyCarFeatures = new List<string> { "HEMI Engine", "335 Horsepower" };
            ISportsBike sportsBike = new Vehicle(1, "Ducati", "Diavel", sportsBikeFeatures);
            IRoadster roadster = new Vehicle(2, "Mazda", "MX-5 Miata", roadsterFeatures);
            IponyCar ponyCar = new Vehicle(3, "Plymouth", "Barracuda");
            sportsBike.PrintVehicleData();
            roadster.PrintVehicleData();
            ponyCar.PrintVehicleData();
            Console.WriteLine("Sports Bike: " + sportsBike + "\nRoadster: " + roadster + "\nPony Car: " + ponyCar);
            Console.ReadLine();
        }
    }
}