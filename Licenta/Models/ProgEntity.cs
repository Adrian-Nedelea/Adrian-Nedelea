using Microsoft.WindowsAzure.Storage.Table;

namespace Models{
    public class ProgEntity :TableEntity
    {
        public ProgEntity(string newEvent)
        {
            this.PartitionKey=newEvent;
        }
    }
}