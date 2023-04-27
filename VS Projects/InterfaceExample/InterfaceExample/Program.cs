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

    public interface IMuscleCar
    {
        void PrintVehicleData();
    }

    public class VehicleInfo
    {
        int id;
        string make;
        string model;
        List<string> features;

        public VehicleInfo(int newID, string newMake, string newModel, List<string> newFeatures = null)
        {
            id = newID;
            make = newMake;
            model = newModel;
            features = newFeatures;
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
            for (int i = 0; i < features.Count; i++)
            {
                stringOfFeatures += features[i];
                if (i != features.Count - 1)
                {
                    stringOfFeatures += ", ";
                }
            }
            return "ID: " + ID.ToString() + ", Make: " + Make.ToString() + ", Model: " + Model + ", Features: " + stringOfFeatures;
        }

    }

    public class Vehicle : IRoadster, IMuscleCar, ISportsBike
    {
        private VehicleInfo theVehicle;

        public Vehicle(int newID, string newMake, string newModel, List<string> newFeatures)
        {
            theVehicle = new VehicleInfo(newID, newMake, newModel, newFeatures);
        }


        void ISportsBike.PrintVehicleData()
        {
            Console.WriteLine("Sports Bike Details: " + theVehicle.Make);
        }

        void IRoadster.PrintVehicleData()
        {
            Console.WriteLine("Roadster Details: " + theVehicle.Make);
        }

        void IMuscleCar.PrintVehicleData()
        {
            Console.WriteLine("Muscle Car Details: " + theVehicle.Make);
        }


        public void PrintAccountData()
        {
            Console.WriteLine("Basic account balance: " + theVehicle.Make);
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
            List<string> sportsBikeFeatures = new List<string>{ "8,800 RPM Redline" };
            List<string> roadsterFeatures = new List<string> { "Convertible", "Rear-Wheel Drive", "Manual Transmission"};
            List<string> muscleCarFeatures = new List<string> { "335 Horsepower" };
            ISportsBike sportsBike = new Vehicle(1, "Ducati", "Diavel", sportsBikeFeatures);
            IRoadster roadster = new Vehicle(2, "Mazda", "MX-5 Miata", roadsterFeatures);
            IMuscleCar muscleCar = new Vehicle(3, "Plymouth", "Barracuda", muscleCarFeatures);
            //Account myAccount = new Account(4, 1.23, "Elle");
            sportsBike.PrintVehicleData();
            roadster.PrintVehicleData();
            muscleCar.PrintVehicleData();
            //myAccount.PrintAccountData();
            Console.WriteLine("Sports Bike: " + sportsBike + "\nRoadster: " + roadster + "\nMuscle Car: " + muscleCar);// + "\nMy account: " + myAccount);
            Console.ReadLine();
        }
    }
}