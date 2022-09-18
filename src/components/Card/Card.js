import "./Card.css";

const Card = ({ title, text, img }) => {
	return (
		<div className="Card">
			<img src={img} alt="img" />
			<h4>{title}</h4>
			<p>{text}</p>
		</div>
	);
};

export default Card;
