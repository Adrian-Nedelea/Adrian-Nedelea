using Microsoft.WindowsAzure.Storage.Table;

namespace Models{
    public class RezultatEntity: TableEntity{
        public RezultatEntity(string Nume ,string Data){
            
            this.PartitionKey=Nume;

            this.RowKey=Data;
        }

        public RezultatEntity(){}
        public string CNP {get;set;}
        public string Varsta {get;set;}

        public string Problema {get; set;}

        public string Tratament {get;set;}
    }
}