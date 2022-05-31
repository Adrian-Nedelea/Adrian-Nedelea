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

    public class RezultatRepositories : IRezultatRepos
    {

        private string _connectionString;

        private CloudTableClient _tableClient;

        private CloudTable _rezultatTable;


        public RezultatRepositories(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=storagelicenta;AccountKey=SuAKdp40FK3kDB/cWtlYR+KzuiXubWjpQ3LsbCyn+4iz9TgKUZC3zgg5U6K6W5hV+ugE6TiW2sxWya4U4RjGBQ==;EndpointSuffix=core.windows.net";

            Task.Run(async () => { await InitializeTable(); }).GetAwaiter().GetResult();
        }

        public async Task InsertRezultat(RezultatEntity rezultat)
        {
            var insertOption = TableOperation.Insert(rezultat);
            await _rezultatTable.ExecuteAsync(insertOption);
        }

        public async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString);
            _tableClient = account.CreateCloudTableClient();

            _rezultatTable = _tableClient.GetTableReference("Rezultate");

            await _rezultatTable.CreateIfNotExistsAsync();

        }
        public async Task<List<RezultatEntity>> GetAllRezult(){

            var prog = new List<RezultatEntity>();

            TableQuery<RezultatEntity> query= new TableQuery<RezultatEntity>();
            
            TableContinuationToken token= null;
            do
            {
            TableQuerySegment<RezultatEntity> resultSegment = await _rezultatTable.ExecuteQuerySegmentedAsync(query, token);
                token = resultSegment.ContinuationToken;

               prog.AddRange(resultSegment.Results);
            } while(token != null);
            return prog;
        }
    }

}