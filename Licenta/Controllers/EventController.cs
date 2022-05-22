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
    [Route("/api/event")]

    public class EventController : Controller
    {
        private IEventRepos _eventRepos;
        public EventController(IEventRepos eventRepos)
        {
           _eventRepos=eventRepos;
        }


        [HttpPost("addEvent")]

        public async Task<IActionResult> Post([FromBody]  Event prog_test)
        {
            var prog = new EventEntity(prog_test.eventName, prog_test.eventDate);

            prog.Number = prog_test.eventNumber;
            prog.Id=prog_test.Id;
            try
            {
                await _eventRepos.InsertNewEvent(prog);
                return Ok("success");
            }
            catch (SystemException e)
            {
                Console.WriteLine("Error:{0}", e);
                return BadRequest(new { message = "Failure" });
            }
        }
         [HttpGet("getall")]
        public async Task<JsonResult> GetAllEvent()
        {
             var prog = new List<EventEntity>();
            prog= await _eventRepos.GetAllEvent();
             return Json(prog);
        }

         [HttpPost("delete")]
        public async Task<IActionResult> DeleteEvent(Event prog_test)
        {
            try
            {
                await _eventRepos.DeleteEvent(prog_test.eventName,prog_test.eventDate);
                return Ok("success");
            }
            catch (System.Exception e)
            {
                Console.WriteLine("{0}", e);
                return BadRequest(new {message = "failure"});
            }
        }

       
    }
}