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
            double airspeed = 20.1;
            int maxWeight = 5;
            double objectWeight = 2.5;
            int expectedCase = 1;
            double expectedSpeed = 10.05;
            //Act
            double[] response = Calculate.CalculateAirspeed(airspeed, maxWeight, objectWeight);
            //Assert
            Assert.AreEqual(expectedCase, response[0]);
            Assert.AreEqual(expectedSpeed, response[1]);
        }

        [TestMethod]
        public void CalculateAirspeed_LadenValidWeight_ReturnCorrectCase()
        {
            //Arrange
            double airspeed = 20.1;
            int maxWeight = 5;
            double objectWeight = 6;
            int expectedCase = 2;
            double expectedSpeed = 0;
            //Act
            double[] response = Calculate.CalculateAirspeed(airspeed, maxWeight, objectWeight);
            //Assert
            Assert.AreEqual(expectedCase, response[0]);
            Assert.AreEqual(expectedSpeed, response[1]);
        }

        [TestMethod]
        public void CalculateAirspeed_LadenNoWeight_ReturnCorrectCase()
        {
            //Arrange
            double airspeed = 20.1;
            int maxWeight = 5;
            int expectedCase = 3;
            double expectedSpeed = 16.08;
            //Act
            double[] response = Calculate.CalculateAirspeed(airspeed, maxWeight, 0);
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
    }
}