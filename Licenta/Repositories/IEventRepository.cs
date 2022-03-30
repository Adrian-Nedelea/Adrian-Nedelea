using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IEventRepository
{
        Task<List<EventEntity>> GetAllMarkers();
        Task InsertNewMarker(EventEntity event);

        Task<List<EventEntity>> GetEventByUser(string user);
        Task DeleteEvent(string pKey, string rKey);
        Task ConfirmMarker(string username, string date);
} 