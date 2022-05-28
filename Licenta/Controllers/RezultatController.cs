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
    [Route("/api/rezultat")]

    public class RezultatController : Controller
    {
        private IRezultatRepos _rezultatRepos;
        public RezultatController(IRezultatRepos rezultatRepos)
        {
           _rezultatRepos=rezultatRepos;
        }


        [HttpPost("addEvent")]

        public async Task<IActionResult> Post([FromBody]  Rezultat rezultat_test)
        {
            var rezultat = new RezultatEntity(rezultat_test.Nume, rezultat_test.Data);

            rezultat.CNP = rezultat_test.CNP;
            rezultat.Varsta=rezultat_test.Varsta;
            rezultat.Problema=rezultat_test.Problema;
            rezultat.Tratament=rezultat_test.Tratament;
           
            try
            {
                await _rezultatRepos.InsertRezultat(rezultat);
                return Ok("success");
            }
            catch (SystemException e)
            {
                Console.WriteLine("Error:{0}", e);
                return BadRequest(new { message = "Failure" });
            }
        }
      

       
    }
}