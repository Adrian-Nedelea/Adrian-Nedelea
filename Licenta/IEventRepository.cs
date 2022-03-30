using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IEventsRepository
{
        Task<List<EventsEntity>> GetAllMarkers();
        Task InsertNewEvents(EventsEntity events);

        Task<List<EventsEntity>> GetEventsByUser(string user);
        Task DeleteEvents(string pKey, string rKey);
        
} 