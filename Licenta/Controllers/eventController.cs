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

namespace Licenta.Controllers{

    [ApiController]
    [Route("/api/event")]

    public class EventsController : Controller{

        public IEventsRepository _eventsRepository;
        public EventsController(IEventsRepository eventsRepository)
        {
            _eventsRepository= eventsRepository;
        }

        [HttpPost("addevent")]
        public async Task<IActionResult> PostEvents(Events events_test)
        {
            var events =new EventsEntity(events_test.eventsuser,events_test.eventsdate);
            events.newEvenst=events_test.newEvents;
            try{
                await _eventsRepository.InsertNewEvents(events);
                return Ok("success");
            }
            catch(System.Exception e)
            {
                Console.WriteLine("Error : {0}" ,e);
                return BadRequest(new {message="Failure"});
            }
        }

        [HttpPost("getbyuser")]

        public async Task<JsonResult> GetEventsByUser(Username user_test)
        {
            var events= new List<EventsEntity>();
            events= await _eventsRepository.GetEventsByUser(user_test.userstring);
            return Json(events);
        }

        [HttpPost("delete")]
        public async Task<IActionResult> DeleteEvents(Events events_test)
        {
            try{
                await _eventsRepository.DeleteEvents(events_test.eventsuser,events_test.eventsdate);
                return Ok("Success");
            }
            catch(System.Exception e)
            {
                Console.WriteLine("{0}",e);
                return BadRequest(new {message="Failure"});
            }
        }

        [HttpGet("getall")]
        public async Task<JsonResult> GetAllEvents()
        {
            var events =new List<EventsEntity>();
            events=await _eventsRepository.GetAllEvents();
            return Json(events);
        }
    }
}