using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.Views
{
    internal class CalculatorView
    {
        public void startPrompt()
        {
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");
        }

        public double PromptForDouble(string prompt)
        {
            double result = getDoubleFromUser(prompt);
            return result;
        }

        public string PromptForOp()
        {
            Console.WriteLine("Choose an operator from the following list:");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.Write("Your option? ");
            string op = Console.ReadLine().ToLower();
            return op;
        }


        static double getDoubleFromUser(string prompt)
        {
            Console.Write(prompt);
            Console.Write("Type a number, and then press Enter: ");
            string numInput = Console.ReadLine();
            double cleanNum = 0;
            while (!double.TryParse(numInput, out cleanNum))
            {
                Console.Write("This is not valid input. Please enter a number: ");
                numInput = Console.ReadLine();
            }
            return cleanNum;
        }

        public void showResult(string result)
        {
            Console.WriteLine(result);
        }

        public void showException(string e)
        {
            Console.WriteLine(e);
        }

        public bool PromptRepeat()
        {
            Console.WriteLine("------------------------\n");
            Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
            Console.WriteLine("\n");
            if (Console.ReadLine() == "n")
            {
                return true;
            }
            return false;
        }

    }
}
