import "./Card.css";

const Card = ({ img, title, text }) => {    
    return (
      <div className="Card" >
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
};

export default Card;