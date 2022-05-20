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

    public class DocRepositories : IDocRepos
    {

        private string _connectionString;

        private CloudTableClient _tableClient;

        private CloudTable _docTable;


        public DocRepositories(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=storagelicenta;AccountKey=SuAKdp40FK3kDB/cWtlYR+KzuiXubWjpQ3LsbCyn+4iz9TgKUZC3zgg5U6K6W5hV+ugE6TiW2sxWya4U4RjGBQ==;EndpointSuffix=core.windows.net";

            Task.Run(async () => { await InitializeTable(); }).GetAwaiter().GetResult();
        }

        public async Task InsertNewDoc(DocEntity doc)
        {
            var insertOption = TableOperation.Insert(doc);
            await _docTable.ExecuteAsync(insertOption);
        }

        public async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString);
            _tableClient = account.CreateCloudTableClient();

            _docTable = _tableClient.GetTableReference("Doctor");

            await _docTable.CreateIfNotExistsAsync();
        }

        public async Task<string> GetDocPass(string Username)
        {
            TableQuery<DocEntity> query = new TableQuery<DocEntity>();

            TableContinuationToken token=null;
            do{
                TableQuerySegment<DocEntity> resultSegment= await _docTable.ExecuteQuerySegmentedAsync(query,token);
                token=resultSegment.ContinuationToken;

                foreach(DocEntity entity in resultSegment.Results)
                {
                    if(entity.RowKey==Username)
                    return entity.Password;
                }
            }
            while (token!=null);
            return null;
        }
        
    }
}