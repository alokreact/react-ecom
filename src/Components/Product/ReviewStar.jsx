const ReviewStar = ({ rating }) => {
    
    //console.log('rating',rating)

    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
  
    return (
      
      <div className="flex items-center">
            {[...Array(filledStars)].map((_, index) => (
            <i key={index} className="text-yellow-400 fas fa-star"></i>
            ))}
            {halfStar === 1 && <i className="text-yellow-400 fas fa-star-half-alt"></i>}
            {[...Array(5 - filledStars - halfStar)].map((_, index) => (
              
              <i key={index} className="text-gray-300 far fa-star"></i>
            ))}

            <span> 3 rating</span>
      </div>
    );
  };
  
  export default ReviewStar;