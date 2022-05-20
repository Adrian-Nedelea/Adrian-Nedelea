using Microsoft.WindowsAzure.Storage.Table;

namespace Models
{
    public class DocEntity : TableEntity
    {
        public DocEntity(string Name, string Username)
        {
            this.PartitionKey = Name;
            this.RowKey = Username;
        }

        public DocEntity() { }

        public string Email { get; set; }

        public string Password { get; set; }


    }
}