using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Collection.Models;
using Collection.Views;

namespace Collection.Collectors
{
    internal class CollectController
    {
        private CollectView myView;
        private CollectModel myModel;

        public CollectController()
        {
            myView = new CollectView();
            myModel = new CollectModel();
        }

        public void LaunchConsole()
        {

            bool endApp = false;
            myView.startPrompt();

            while (!endApp)
            {
                string userChoice = myView.PromptForOption();
                try
                {
                    if (userChoice == "a")
                    {
                        myView.WritePrompt("\nEnter a new item for the to-do list: ");
                        string newItem = myView.GetInput();
                        while (newItem == "")
                        {
                            myView.WritePrompt("\nThis is not valid input. Please enter an item: ");
                            newItem = myView.GetInput();
                        }
                        myModel.AddItem(newItem);
                    }
                    else if (userChoice == "d")
                    {
                        int ListLength = myModel.ItemList.Count;
                        if (ListLength != 0)
                        {
                            PrintList();
                            myView.WritePrompt("\nEnter the index of the item you wish to delete from the to-do list:");
                            // Get the input
                            string input = myView.GetInput();
                            while (string.IsNullOrEmpty(input) || int.Parse(input) > ListLength)
                            {
                                myView.WritePrompt("\nThis is not valid index. Please enter an index of an item in the current list: ");
                                PrintList();
                                myView.WritePrompt("\nEnter the index of the item you wish to delete from the to-do list: ");
                                input = myView.GetInput();
                            }
                            myModel.DeleteItem(int.Parse(input));
                        }
                        else
                        {
                            myView.WritePrompt("The list is currently empty, there are no items to delete.");
                        }
                    }
                    else if (userChoice == "x")
                    {
                        endApp = true;
                    }
                    else myView.WritePrompt("Please choose one of the listed options");
                }
                catch (Exception e)
                {
                    myView.WritePrompt("Oh no! An exception occurred trying to complete your selected action.\n - Details: " + e.Message);
                }

                PrintList();
            }
        }

        private void PrintList()
        {
            myView.WritePrompt("\n------------------------\nCurrent List:\n");
            int index = 1;
            List<string> ItemList = myModel.ItemList;
            foreach (var item in ItemList)
            {
                myView.WritePrompt("\n\t" + index.ToString() + ": " + item);
                index++;
            }
            myView.WritePrompt("\n------------------------");
        }
    }
}
