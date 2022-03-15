import './App.css';

const cards = [
    {
        img: '/images/icon1.png',
        name: "Declarative",
        description: "React makes it painless to create interactive UIs."
    },
    {
        img: '/images/icon2.png',
        name: "Components",
        description: "Build encapsulated components that manage their state"
    },
    {
        img: '/images/icon3.png',
        name: "Single-Way",
        description: "A set of immutable values are passed to the components."
    },
    {
        img: '/images/icon4.png',
        name: "JSX",
        description: "Statically-typed, designed to run on modenr browsers."
    }]

// const card1 = {
//     img: '/images/icon1.png',
//     name: "Declarative",
//     description: "React makes it painless to create interactive UIs."
// }
// const card2 = {
//     img: '/images/icon2.png',
//     name: "Components",
//     description: "Build encapsulated components that manage their state"
// }
// const card3 = {
//     img: '/images/icon3.png',
//     name: "Single-Way",
//     description: "A set of immutable values are passed to the components."
// }
// const card4 = {
//     img: '/images/icon4.png',
//     name: "JSX",
//     description: "Statically-typed, designed to run on modenr browsers."
// }

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='container1'>
                    <nav>
                        <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
                        <img src="/images/menu-top.svg" className="App-menu-top" alt="logo" />
                    </nav>
                    <div className='wave'>
                        <h1 className='title'>
                            Say hello to
                            ReactJS
                        </h1>
                        <p className='text-wave'>
                            You will learn how to use
                            the most popular forntend library,
                            and become a super Nija developer.
                        </p>
                        <div className='button-container'>
                            <button type='button'>
                                Awesome!
                            </button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className='container2'>
                    <div className='card-container'>
                        {cards.map((card, index) => {
                            return (
                                <div className='card1'>
                                    <div key={index}>
                                        <img src={card.img}></img>
                                        <h4>{card.name}</h4>
                                        <p className='text-card'>{card.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

{/* <img src={card1.img}></img>
                                <h4>{card1.name}</h4>
                                <p className='text-card'>{card1.description}</p>
                            </div>
                            <div className='card1'>
                                <img src={card2.img}></img>
                                <h4>{card2.name}</h4>
                                <p className='text-card'>{card2.description}</p>
                            </div>
                            <div className='card1'>
                                <img src={card3.img}></img>
                                <h4>{card3.name}</h4>
                                <p className='text-card'>{card3.description}</p>
                            </div>
                            <div className='card1'>
                                <img src={card4.img}></img>
                                <h4>{card4.name}</h4>
                                <p className='text-card'>{card4.description}</p>
                            </div> */}