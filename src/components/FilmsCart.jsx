/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export const FilmsCart = ({title, overview, date, img}) => {
  return (
    <div  className="card">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <p>{overview}</p>
        <p><span>{date}</span></p>
        <hr />
    </div>
  )
};

FilmsCart.propType = {
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};