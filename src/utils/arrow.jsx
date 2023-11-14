import left_arrow from '../assets/left-arrow.svg';
import right_arrow from '../assets/right-arrow.svg';


export const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      {/* Insert your custom SVG for the previous arrow here */}
       <img src={left_arrow} />

    </div>
  );
}

export const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      {/* Insert your custom SVG for the previous arrow here */}

       <img src={right_arrow} />

    </div>
  );
}

 
