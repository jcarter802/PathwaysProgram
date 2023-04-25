using System;

namespace Calculator
{
    class Calculator
    {
        private double numOne;
        private double numTwo;

        public Calculator()
        {
            numOne = 0;
            numTwo = 0;
        }
        public double numberOne
        {
            get { return numOne; }
            set { numOne = value; }
        }

        public double numberTwo
        {
            get { return numTwo; }
            set { numTwo = value; }
        }

        public double Operation(string chosenOp)
        {
            double answer = double.NaN;

            switch (chosenOp)
            {
                case "a":
                    answer = numOne + numTwo;
                    break;
                case "s":
                    answer = numOne - numTwo;
                    break;
                case "m":
                    answer = numOne * numTwo;
                    break;
                case "d":
                    if (numOne != 0)
                    {
                        answer = numOne / numTwo;
                    }
                    break;
                default:
                    break;

            }

            return answer;
        }
    }        
}