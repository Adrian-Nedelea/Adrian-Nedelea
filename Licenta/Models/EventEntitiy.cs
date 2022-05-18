using Microsoft.WindowsAzure.Storage.Table;

namespace Models{
    public class EventEntity : TableEntity{
        
        public EventEntity (string Username , string date)
        {
            this.PartitionKey= Username;
            this.RowKey=date;
        }

        public EventEntity(){}
        public string message {get ; set;}

        public string numedoc {get; set;}

        public int phone {get; set;}

        public string ora {get; set;}
    }
}