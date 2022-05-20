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
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=storagelicenta;AccountKey=SuAKdp40FK3kDB/cWtlYR+KzuiXubWjpQ3LsbCyn+4iz9TgKUZC3zgg5U6K6W5hV+ugE6TiW2sxWya4U4RjGBQ==;EndpointSuffix=core.windows.net";

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

    }}