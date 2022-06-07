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
    [Route("/api/review")]

    public class ReviewController : Controller
    {
        private IReviewRepos _reviewRepos;
        public ReviewController(IReviewRepos reviewRepos)
        {
           _reviewRepos=reviewRepos;
        }


        [HttpPost("addReview")]

        public async Task<IActionResult> Post([FromBody]  Review review_test)
        {
            var review = new ReviewEntity(review_test.nume, review_test.rating);

             review.text=review_test.text;

            try
            {
                await _reviewRepos.InsertNewReview(review);
                return Ok("success");
            }
            catch (SystemException e)
            {
                Console.WriteLine("Error:{0}", e);
                return BadRequest(new { message = "Failure" });
            }
        }
         [HttpGet("getall")]
        public async Task<JsonResult> GetAllReview()
        {
             var review = new List<ReviewEntity>();
            review= await _reviewRepos.GetAllReview();
             return Json(review);
        }

       

       
    }
}