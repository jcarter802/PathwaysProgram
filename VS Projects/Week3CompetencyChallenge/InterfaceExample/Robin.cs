using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MontyPython
{
    public class Robin : IAirspeed
    {
        BirdData bird = new BirdData(7, 12.5);

        public string DetermineSpeed(bool unladen, double objectWeight)
        {
            // Create class object of bird's details
            string airspeed = "";
            string answer = "";
            if (unladen)
            {
                answer = "Airspeed of an unladen {0} is {3} mph.";
            }
            else
            {
                double[] calculations = Calculate.CalculateAirspeed(bird, objectWeight);
                airspeed = calculations[1].ToString();
                switch (calculations[0])
                {
                    case 1:
                        answer = "The speed/velocity of a {0} laden with a {1} pound object is {2} mph.";
                        break;
                    case 2:
                        answer = "Are you out of your mind?! A {1} pound object would take at least TWO {0}s to carry!";
                        break;
                    case 3:
                        answer = "A valid weight was not provided, so assuming the object is a 1 pound coconut, the velocity of the laden {0} is {2} mph.";
                        break;
                    default:
                        break;
                }
            }
            answer = string.Format(answer, "robin", objectWeight.ToString(), airspeed, bird.USpeed);
            return (answer);
        }
    }
}
