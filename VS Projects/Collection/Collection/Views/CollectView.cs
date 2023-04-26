using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collection.Views
{
    internal class CollectView
    {
        public void startPrompt()
        {
            Console.WriteLine("Console List Collection in C#\r");
            Console.WriteLine("------------------------\n");
        }

        public string PromptForOption()
        {
            Console.WriteLine("\nChoose an option from the following list:");
            Console.WriteLine("\ta - Add Item");
            Console.WriteLine("\td - Delete Item");
            Console.WriteLine("\tx - Close Console");
            Console.Write("\nYour option? ");
            string userChoice = Console.ReadLine();
            return userChoice;
        }

        public void WritePrompt(string prompt)
        {
            Console.Write(prompt);
        }

        public string GetInput()
        {
            string input = Console.ReadLine();
            return input.ToString();
        }
    }
}
