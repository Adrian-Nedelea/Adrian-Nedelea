using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IEventRepos
{
    Task InsertNewEvent(EventEntity prog);

    Task<List<EventEntity>> GetAllEvent();

    Task DeleteEvent(string pKey, string rKey);
    
}