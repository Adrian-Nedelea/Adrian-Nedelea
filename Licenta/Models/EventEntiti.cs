using Microsoft.WindowsAzure.Storage.Table;

namespace Models{
    public class EventEntity: TableEntity{
        public EventEntity(string eventName ,string eventDate){
            this.PartitionKey=eventName;
            this.RowKey=eventDate;
        }

        public EventEntity(){}
        public string Number {get;set;}
    }
}