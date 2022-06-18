using Microsoft.WindowsAzure.Storage.Table;

namespace Models{
    public class ReviewEntity: TableEntity{
        public ReviewEntity(string nume ,string rating){

        this.PartitionKey=nume;

        this.RowKey=rating;
        }

        public ReviewEntity(){}

        public string text {get; set;}
     
    }
}