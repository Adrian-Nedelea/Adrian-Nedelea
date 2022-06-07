using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IReviewRepos
{
    Task InsertNewReview(ReviewEntity review);

    Task<List<ReviewEntity>> GetAllReview();
    
}