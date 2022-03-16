import './Card.css'

const featureCards = [
    {
        image:'../images/icon1.png',
        title:'Declarativa',
        description:'React makes it painless to create interactive UIs.'
    },
    {
        image:'../images/icon2.png',
        title:'Components',
        description:'Build encapsulated components that manage their state.'
    },
    {
        image:'../images/icon3.png',
        title:'Single-Way',
        description:'A set of immutable values are passed to the component´s.'
    },
    {
        image:'../images/icon4.png',
        title:'JSX',
        description:'Statically-typed. Designed to run on modern browsers.'
    }
]

function Card() {
    return(
            <div className="container">
        <div className='cards-features'>
                {featureCards.map((card, index) => 
                    <div key={card-{index}} className="feature">
                        <img src={card.image} alt="feature img" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                    )}
        </div>
            </div>
    )
}

export default Card