import PropTypes from "prop-types";
import profilePic from "./assets/pic.png"




function Card({name="Name", text="some text"}){

    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="minecraft" />
            <h2 className="card-title">{name}</h2>
            <p className="card-p">{text}</p>
        </div>
    );
}

Card.propTypes={
    name: PropTypes.string,
    text: PropTypes.string,
}

export default Card