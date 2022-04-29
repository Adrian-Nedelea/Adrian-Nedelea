using System;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Models;



namespace Repositories{

    public class EventsRepository : IEventsRepository
    {
        private string _connectionString;
        private CloudTableClient _tableClient;
        private CloudTable _eventsTable;

        public EventsRepository(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=storagelicenta;AccountKey=24w2UAh7rjnlnya2wRQTymsXCATJqXr9uz/libH/vxXK/6bQ3AL5WLL3tl4vh8mijertYA8ZpaU4pw1scoRr6g==;EndpointSuffix=core.windows.net";

            Task.Run(async () => {await InitializeTable();}).GetAwaiter().GetResult();
        }

        public async Task<List<EventsEntity>> GetAllEvents()
        {
            var events =new List<EventsEntity>();

            TableQuery<EventsEntity> query = new TableQuery<EventsEntity>();
            TableContinuationToken token = null;
            do{
                TableQuerySegment<EventsEntity> resultSegment=await _eventsTable.ExecuteQuerySegmentedAsync(query, token);
                token=resultSegment.ContinuationToken;
                events.AddRange(resultSegment.Results);

            }while(token!= null);
            return events;
        }
        public async Task InsertNewEvents(EventsEntity events)
        {
            var insertOperation=TableOperation.Insert(events);
            await _eventsTable.ExecuteAsync(insertOperation);
        }
        public async Task DeleteEvents(string pkey ,string rKey)
        {
            var entity = new DynamicTableEntity(pkey, rKey) {ETag="*"};
            await _eventsTable.ExecuteAsync(TableOperation.Delete(entity));
        }
           public async Task<List<EventsEntity>> GetEventsByUser(string user)
        {
            var events = new List<EventsEntity>();

            TableQuery<EventsEntity> query = new TableQuery<EventsEntity>(); 

            TableContinuationToken token = null;
            do
            {
                TableQuerySegment<EventsEntity> resultSegment = await _eventsTable.ExecuteQuerySegmentedAsync(query, token);
                token = resultSegment.ContinuationToken;
                foreach (EventsEntity entity in resultSegment.Results)
                {
                    if(entity.PartitionKey == user)
                      events.Add(entity);
                }
                
            } while (token != null);

            return events;

        }



        private async Task InitializeTable()
        {
           var account = CloudStorageAccount.Parse(_connectionString);
           
            _tableClient = account.CreateCloudTableClient();

            _eventsTable = _tableClient.GetTableReference("Events");

            await _eventsTable.CreateIfNotExistsAsync();


        }
    }
}