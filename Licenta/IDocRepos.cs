using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IDocRepos
{
    Task InsertNewDoc(DocEntity doc);
    Task<string> GetDocPass(string UsernameDoc);
    
}