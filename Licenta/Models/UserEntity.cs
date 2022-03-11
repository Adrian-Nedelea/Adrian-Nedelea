using Microsoft.WindowsAzure.Storage.Table;

namespace Models
{
    public class UserEntity : TableEntity
    {
        public UserEntity(string City, string Username)
        {
            this.PartitionKey = City;
            this.RowKey = Username;
        }

        public UserEntity() { }

        public string FullName { get; set; }
        public string Email { get; set; }

        public string Number { get; set; }

        public string Password { get; set; }


    }
}