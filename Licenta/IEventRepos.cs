using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IEventRepos
{ 
    Task InsertNewEvent(EventEntity eventEntity);
}