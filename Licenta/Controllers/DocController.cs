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
    [Route("/api/doc")]

    public class DocController : Controller
    {
        private IDocRepos _docRepos;
        public DocController(IDocRepos docRepos)
        {
            _docRepos = docRepos;
        }


        [HttpPost("register")]

        public async Task<IActionResult> Post([FromBody] DocRegister user_test)
        {
            var user = new DocEntity(user_test.Name, user_test.Username);
            user.Email = user_test.Email;
            user.Password = user_test.Password;

            try
            {
                await _docRepos.InsertNewDoc(user);
                return Ok("success");
            }
            catch (SystemException e)
            {
                Console.WriteLine("Error:{0}", e);
                return BadRequest(new { message = "Failure" });
            }
        }

           [HttpPost("login")]
        public async Task<IActionResult> Post(DocLogin doc_login)
        {
            string _getpass= await _docRepos.GetDocPass(doc_login.Username);
            if(_getpass == null)
                return BadRequest(new{message ="Login failed!"});
                else
                {
                    if(_getpass != doc_login.Password)
                    return BadRequest( new {message ="Login Failed!"});
                    else 
                    return Ok(new {message="Login Success"});
                }
        }

    }
}