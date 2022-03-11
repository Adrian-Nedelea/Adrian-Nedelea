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
            _connectionString = "DefaultEndpointsProtocol=https;AccountName=storagelicenta;AccountKey=24w2UAh7rjnlnya2wRQTymsXCATJqXr9uz/libH/vxXK/6bQ3AL5WLL3tl4vh8mijertYA8ZpaU4pw1scoRr6g==;EndpointSuffix=core.windows.net";

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
    }
}