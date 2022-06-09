using System;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Models;
namespace Repositories
{

    public class EventRepositories : IEventRepos
    {

        private string _connectionString;

        private CloudTableClient _tableClient;

        private CloudTable _eventTable;


        public EventRepositories(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=licentaceva;AccountKey=0HrYuEIpQ/EMeOzRUq++hBKGBX7PL2fKiUa4aC9RK3q+SQhKnkDG4+CPe6vNEZLjlD9b9a8AfGjH+AStVDuQsg==;EndpointSuffix=core.windows.net";
            Task.Run(async () => { await InitializeTable(); }).GetAwaiter().GetResult();
        }

        public async Task InsertNewEvent(EventEntity prog)
        {
            var insertOption = TableOperation.Insert(prog);
            await _eventTable.ExecuteAsync(insertOption);
        }

        public async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString);
            _tableClient = account.CreateCloudTableClient();

            _eventTable = _tableClient.GetTableReference("Events");

            await _eventTable.CreateIfNotExistsAsync();

        }

        public async Task<List<EventEntity>> GetAllEvent(){

            var prog = new List<EventEntity>();

            TableQuery<EventEntity> query= new TableQuery<EventEntity>();
            
            TableContinuationToken token= null;
            do
            {
            TableQuerySegment<EventEntity> resultSegment = await _eventTable.ExecuteQuerySegmentedAsync(query, token);
                token = resultSegment.ContinuationToken;

               prog.AddRange(resultSegment.Results);
            } while(token != null);
            return prog;
        }

        public async Task DeleteEvent (string pKey, string rKey){
            
           var entity = new DynamicTableEntity(pKey, rKey) {ETag = "*"};
            await _eventTable.ExecuteAsync(TableOperation.Delete(entity)); 
        }

          public async Task ConfirmEvent(string eventName, string eventDate)
        {
            var prog = new EventEntity();
            TableQuery<EventEntity> query = new TableQuery<EventEntity>();

            TableContinuationToken token = null;
            do
            {
            TableQuerySegment<EventEntity> resultSegment = await _eventTable.ExecuteQuerySegmentedAsync(query, token);
            token = resultSegment.ContinuationToken;

            foreach (EventEntity entity in resultSegment.Results)
            {
                if(entity.PartitionKey == eventName)
                  if(entity.RowKey == eventDate)
                      prog = entity; 
            }
            }while (token != null);
            prog.Confirmed = true;
            var editOperation = TableOperation.Merge(prog);
            try{
                await _eventTable.ExecuteAsync(editOperation);
            }
            catch (StorageException e)
            {
                Console.WriteLine("{0}", e);
            }

        }
    }
}