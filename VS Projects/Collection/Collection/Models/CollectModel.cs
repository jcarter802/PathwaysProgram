using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collection.Models
{
    internal class CollectModel
    {
        private List<string> itemList = new List<string>();

        public void Collector()
        {
            itemList = new List<string>();
        }

        public List<string> ItemList
        {
            get { return itemList.ToList(); }
        }

        public List<string> AddItem(string newitem)
        {
            itemList.Add(newitem);
            return itemList;
        }

        public List<string> DeleteItem(int index)
        {
            itemList.RemoveAt(index - 1);
            return itemList;
        }
    }
}
