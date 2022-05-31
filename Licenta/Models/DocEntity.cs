using Microsoft.WindowsAzure.Storage.Table;

namespace Models
{
    public class DocEntity : TableEntity
    {
        public DocEntity(string Name, string UsernameDoc)
        {
            this.PartitionKey = Name;
            this.RowKey = UsernameDoc;
        }

        public DocEntity() { }

        public string Email { get; set; }

        public string Password { get; set; }


    }
}