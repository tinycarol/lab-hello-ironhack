import { cardComponent } from '../Card/Card'
import { cardImages } from '../Card/data';


const mainBlock = 
  <main className="features">
    {Object.keys(cardImages).map((card, index) => {
      return (
        cardComponent(
          index,
          cardImages[card]["logo"],
          cardImages[card]["title"],
          cardImages[card]["text"],
        )
      )
    })}
  </main>;


export { mainBlock };