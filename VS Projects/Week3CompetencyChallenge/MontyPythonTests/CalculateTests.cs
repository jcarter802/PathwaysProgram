using MontyPython;

namespace MontyPythonTests
{
    [TestClass]
    public class CalculateTests
    {
        [TestMethod]
        public void CalculateAirspeed_LadenMaxWeightExceeded_ReturnCorrectCase()
        {
            //Arrange
            BirdData bird = new BirdData(6, 37.6);
            double objectWeight = 2.5;
            int expectedCase = 1;
            double expectedSpeed = 21.933;
            //Act
            double[] response = Calculate.CalculateAirspeed(bird, objectWeight);
            //Assert
            Assert.AreEqual(expectedCase, response[0]);
            Assert.AreEqual(expectedSpeed, response[1]);
        }

        [TestMethod]
        public void CalculateAirspeed_LadenValidWeight_ReturnCorrectCase()
        {
            //Arrange
            BirdData bird = new BirdData(5, 20.1);
            double objectWeight = 6;
            int expectedCase = 2;
            double expectedSpeed = 0;
            //Act
            double[] response = Calculate.CalculateAirspeed(bird, objectWeight);
            //Assert
            Assert.AreEqual(expectedCase, response[0]);
            Assert.AreEqual(expectedSpeed, response[1]);
        }

        [TestMethod]
        public void CalculateAirspeed_LadenNoWeight_ReturnCorrectCase()
        {
            //Arrange
            BirdData bird = new BirdData(5, 20.1);
            int expectedCase = 3;
            double expectedSpeed = 16.08;
            //Act
            double[] response = Calculate.CalculateAirspeed(bird, 0);
            //Assert
            Assert.AreEqual(expectedCase, response[0]);
            Assert.AreEqual(expectedSpeed, response[1]);
        }

        [TestMethod]
        public void AirSpeedService_UnladenSwallow_ReturnString()
        {
            //Arrange
            IAirspeed swallow = new Swallow();
            AirspeedService airspeedServiceSwallow = new AirspeedService(swallow);
            string expectedResponse = "Airspeed velocity of an unladen swallow is 20.1 mph.";
            //Act
            string response = airspeedServiceSwallow.DetermineSpeed(true);
            //Assert
            Assert.AreEqual(response, expectedResponse);
        }

        [TestMethod]
        public void CalculateAirspeed_MaxWeightLaden_ReturnCorrectCase()
        {
            //Arrange
            IAirspeed seagull = new Seagull();
            AirspeedService airspeedServiceSwallow = new AirspeedService(seagull);
            string expectedResponse = "A valid weight was not provided, so assuming the object is a 1 pound coconut, the velocity of the laden seagull is 31.333 mph.";
            //Act
            string response = airspeedServiceSwallow.DetermineSpeed(false);
            //Assert
            Assert.AreEqual(response, expectedResponse);
        }
    }
}