using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IUserRepos
{
    Task InsertNewUser(UserEntity user);
    Task<string> GetUserPass(string Username);
    
}