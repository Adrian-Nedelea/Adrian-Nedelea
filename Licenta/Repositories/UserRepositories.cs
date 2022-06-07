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

    public class UserRepositories : IUserRepos
    {

        private string _connectionString;

        private CloudTableClient _tableClient;

        private CloudTable _userTable;


        public UserRepositories(IConfiguration configuration)
        {
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=licentaceva;AccountKey=0HrYuEIpQ/EMeOzRUq++hBKGBX7PL2fKiUa4aC9RK3q+SQhKnkDG4+CPe6vNEZLjlD9b9a8AfGjH+AStVDuQsg==;EndpointSuffix=core.windows.net";
            Task.Run(async () => { await InitializeTable(); }).GetAwaiter().GetResult();
        }

        public async Task InsertNewUser(UserEntity user)
        {
            var insertOption = TableOperation.Insert(user);
            await _userTable.ExecuteAsync(insertOption);
        }

        public async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString);
            _tableClient = account.CreateCloudTableClient();

            _userTable = _tableClient.GetTableReference("Users");

            await _userTable.CreateIfNotExistsAsync();

        }

        public async Task<string> GetUserPass(string Username)
        {
            TableQuery<UserEntity> query = new TableQuery<UserEntity>();

            TableContinuationToken token=null;
            do{
                TableQuerySegment<UserEntity> resultSegment= await _userTable.ExecuteQuerySegmentedAsync(query,token);
                token=resultSegment.ContinuationToken;

                foreach(UserEntity entity in resultSegment.Results)
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