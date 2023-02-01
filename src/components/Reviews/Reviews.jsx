import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieDbApi';
import { Box } from '../Box';
import { ReviewItem, TextContent } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  //   if (!reviews) {
  //     return;
  //   }

  console.log(reviews);

  return (
    <>
      <Box as="ul">
        {reviews.map(review => (
          <ReviewItem>
            <Box as="h3" mb="5">
              {review.author}
            </Box>

            <TextContent>{review.content}</TextContent>
          </ReviewItem>
        ))}
      </Box>
    </>
  );
};

export default Reviews;
