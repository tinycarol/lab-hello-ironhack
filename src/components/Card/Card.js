import './card.css'


const cardComponent = (key, logo, title, text) => {
	return (
		<div key={key} className="card">
			<img src={logo} className="card-img-top" alt="..." />
			<div className="card-body">
				<h2 className=""> {title} </h2>
				<p className="card-text">
					{text}
				</p>
			</div>
		</div>
	);
};

export { cardComponent };
