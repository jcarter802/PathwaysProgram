using System;

namespace Collection
{
    class Program
    {
        static void Main(string[] args)
        {
            Collector myCollector = new Collector();  // myCalc is the object of the class Calculator

            bool endApp = false;                   // local variable to flag when to end the application

            // Display title as the C# console calculator app.
            Console.WriteLine("Console List Collection in C#\r");
            Console.WriteLine("------------------------\n");

            while (!endApp)
            {
                PrintOptions();
                string userChoice = Console.ReadLine();

                try
                {
                    if (userChoice == "a")
                    {
                        AddItem(myCollector);
                    }
                    else if (userChoice == "d")
                    {
                        int ListLength = myCollector.ItemList.Count;
                        if (ListLength != 0)
                        {
                            DeleteItem(myCollector, ListLength);
                        }
                        else
                        {
                            Console.WriteLine("The list is currently empty, there are no items to delete.");
                        }
                    }
                    else if (userChoice == "x")
                    {
                        endApp = true;
                    }
                    else Console.WriteLine("Please choose one of the listed options");
                }
                catch (Exception e)
                {
                    Console.WriteLine("Oh no! An exception occurred trying to complete your selected action.\n - Details: " + e.Message);
                }

                PrintList(myCollector);
            }  
            return;
        }

        static void PrintOptions()
        {
            // Ask the user to choose an operator.
            Console.WriteLine("\nChoose an option from the following list:");
            Console.WriteLine("\ta - Add Item");
            Console.WriteLine("\td - Delete Item");
            Console.WriteLine("\tx - Close Console");
            Console.Write("\nYour option? ");
        }

        static void AddItem(Collector myCollector)  // static method to get a number from the user since we do it a couple of times
        {
            // Ask the user to type the number.
            Console.Write("\nEnter a new item for the to-do list: ");
            // Get the input
            string input = Console.ReadLine();
            while ( input == "")
            {
                Console.Write("\nThis is not valid input. Please enter an item: ");
                input = Console.ReadLine();
            }
            myCollector.AddItem(input);
        }

        static void DeleteItem(Collector myCollector, int ListLength)  // static method to get a number from the user since we do it a couple of times
        {
            // Ask the user to type the number.
            PrintList(myCollector);
            Console.Write("\nEnter the index of the item you wish to delete from the to-do list:");
            // Get the input
            string input = Console.ReadLine();
            while (string.IsNullOrEmpty(input) || int.Parse(input) > ListLength)
            {
                Console.Write("\nThis is not valid index. Please enter an index of an item in the current list: ");
                PrintList(myCollector);
                Console.Write("\nEnter the index of the item you wish to delete from the to-do list: ");
                input = Console.ReadLine();
            }
            myCollector.DeleteItem(int.Parse(input));
        }

        static void PrintList(Collector myCollector)
        {
            Console.WriteLine("\n------------------------\nCurrent List:\n");
            int index = 1;
            List<string> ItemList = myCollector.ItemList;
            foreach (var item in ItemList)
            {
                Console.WriteLine("\t" + index.ToString() + ": " + item);
                index++;
            }

            Console.WriteLine("\n------------------------");
        }

    }
}




