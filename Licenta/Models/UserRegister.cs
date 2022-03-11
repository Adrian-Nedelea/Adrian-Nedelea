using Microsoft.WindowsAzure.Storage.Table;

namespace Models
{
    public class UserRegister
    {
        public UserRegister() { }

        public string FullName { get; set; }

        public string City { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Number { get; set; }

        public string Password { get; set; }

    }
}