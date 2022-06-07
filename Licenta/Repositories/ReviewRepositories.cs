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

    public class ReviewRepositories : IReviewRepos
    {

        private string _connectionString;

        private CloudTableClient _tableClient;

        private CloudTable _reviewTable;


        public ReviewRepositories(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=licentaceva;AccountKey=0HrYuEIpQ/EMeOzRUq++hBKGBX7PL2fKiUa4aC9RK3q+SQhKnkDG4+CPe6vNEZLjlD9b9a8AfGjH+AStVDuQsg==;EndpointSuffix=core.windows.net";
            Task.Run(async () => { await InitializeTable(); }).GetAwaiter().GetResult();
        }

        public async Task InsertNewReview(ReviewEntity prog)
        {
            var insertOption = TableOperation.Insert(prog);
            await _reviewTable.ExecuteAsync(insertOption);
        }

        public async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString);
            _tableClient = account.CreateCloudTableClient();

            _reviewTable = _tableClient.GetTableReference("Reviews");

            await _reviewTable.CreateIfNotExistsAsync();

        }

        public async Task<List<ReviewEntity>> GetAllReview(){

            var prog = new List<ReviewEntity>();

            TableQuery<ReviewEntity> query= new TableQuery<ReviewEntity>();
            
            TableContinuationToken token= null;
            do
            {
            TableQuerySegment<ReviewEntity> resultSegment = await _reviewTable.ExecuteQuerySegmentedAsync(query, token);
                token = resultSegment.ContinuationToken;

               prog.AddRange(resultSegment.Results);
            } while(token != null);
            return prog;
        }

    }}