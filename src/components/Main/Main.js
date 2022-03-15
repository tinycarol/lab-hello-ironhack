import { cardComponent } from "../Card/Card";
import { cardImages } from "../Card/data";
import './main.css'


const Mainblock = () => {
	return (
		<main className="features">
			{cardImages.map((card, index) => {
				return cardComponent(
					index,
					card.src,
					card.title,
					card.text
				);
			})}
		</main>
	);
};


export { Mainblock };
