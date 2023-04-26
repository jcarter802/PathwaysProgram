using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Calculator.Models;
using Calculator.Views;

namespace Calculator.Controllers
{
    internal class CalculatorController
    {
        public CalculatorController()
        {
            CalculatorView myView = new CalculatorView();
            CalculatorModel myModel = new CalculatorModel();

            bool endApp = false;
            myView.startPrompt();

            while (!endApp)
            {
                try
                {
                    myModel.numberOne = myView.PromptForDouble("First number - ");
                    myModel.numberTwo = myView.PromptForDouble("Second number - ");
                    double result = myModel.Operation(myView.PromptForOp());

                    if (double.IsNaN(result))
                    {
                        myView.showResult("This operation can not be performed.\n");
                    }
                    else myView.showResult("Your result: \n" + result.ToString());
                }
                catch (Exception e)
                {
                    myView.showException("Oh no! An exception occurred trying to do the math.\n - Details: " + e.Message);
                }

                endApp = myView.PromptRepeat();

            }
        }
    }
}
