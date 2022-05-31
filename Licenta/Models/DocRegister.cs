using Microsoft.WindowsAzure.Storage.Table;

namespace Models
{
    public class DocRegister
    {
        public DocRegister() { }
        
        public string Name { get; set; }

        public string UsernameDoc { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

    }
}