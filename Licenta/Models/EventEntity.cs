using Microsoft.WindowsAzure.Storage.Table;
namespace Models{
    public class EventsEntity :TableEntity
    {
        public EventsEntity (string username ,string date)
        {
            this.PartitionKey=username;
            this.RowKey=date;
        }
        public EventsEntity(){}

        public string newEvenst{get ;set;}
    }
}