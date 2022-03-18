using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using Models;
using Repositories;


namespace Licenta.Controllers
{
    [ApiController]
    [Route("/api/user")]

    public class UserController : Controller
    {
        private IUserRepos _userRepos;
        public UserController(IUserRepos userRepos)
        {
            _userRepos = userRepos;
        }


        [HttpPost("register")]

        public async Task<IActionResult> Post([FromBody] UserRegister user_test)
        {
            var user = new UserEntity(user_test.City, user_test.Username);
            user.FullName = user_test.FullName;
            user.Email = user_test.Email;
            user.Number = user_test.Number;
            user.Password = user_test.Password;

            try
            {
                await _userRepos.InsertNewUser(user);
                return Ok("success");
            }
            catch (SystemException e)
            {
                Console.WriteLine("Error:{0}", e);
                return BadRequest(new { message = "Failure" });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Post(UserLogin user_login)
        {
            string _getpass= await _userRepos.GetUserPass(user_login.Username);
            if(_getpass == null)
                return BadRequest(new{message ="Login failed!"});
                else
                return Ok(new {message ="Login Success"});
        }


    }
}