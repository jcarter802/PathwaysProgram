using MontyPython;

namespace MontyPythonTests
{
    [TestClass]
    public class CalculateTests
    {
        // First 3 tests cover the possible calculation return cases
        // The last 4 tests the implementation of the airspeed interface, through the calling of the calculate class, to the string returned by the implementation.
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
        public void AirSpeedService_UnladenSwallow_ReturnCorrectString()
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
        public void AirSpeedService_LadenNoWeightProvided_ReturnCorrectString()
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


        [TestMethod]
        public void AirSpeedService_LadenWeightProvided_ReturnCorrectString()
        {
            //Arrange
            IAirspeed eagle = new Eagle();
            AirspeedService airspeedServiceSwallow = new AirspeedService(eagle);
            string expectedResponse = "The velocity of an eagle laden with a 17 pound object is 68.331 mph.";
            //Act
            string response = airspeedServiceSwallow.DetermineSpeed(false, 17);
            //Assert
            Assert.AreEqual(response, expectedResponse);
        }

        [TestMethod]
        public void AirSpeedService_LadenMaxWeightExceeded_ReturnCorrectString()
        {
            //Arrange
            IAirspeed robin = new Robin();
            AirspeedService airspeedServiceRobin = new AirspeedService(robin);
            string expectedResponse = "Are you out of your mind?! A 20 pound object would take at least TWO robins to carry!";
            //Act
            string response = airspeedServiceRobin.DetermineSpeed(false, 20);
            //Assert
            Assert.AreEqual(response, expectedResponse);
        }
    }
}