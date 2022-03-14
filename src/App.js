import './App.css'


const cardItems = [
    {
        img: '/images/icon1.png',
        title: 'Declarative',
        description: 'React makes it painñess to create interactivs Uls.'
    }, {
        img: '/images/icon2.png',
        title: 'Components',
        description: 'Build encapsuladed components that manage their state.'
    }, {
        img: '/images/icon3.png',
        title: 'Single-Way',
        description: 'A set of immutable values are passed o the component`s'
    }, {
        img: '/images/icon4.png',
        title: 'JSX',
        description: 'Statocally-typed designed to run on modern browsers'
    }
]

function App() {
    return (
            <div className='grid'>
                <div id="navBar">
                    <img id="ironhack-logo" src="/images/ironhack-logo.svg" alt="ironhack logo" />
                    <img id="bar-icon" src="/images/menu-top.svg" alt="bar icon" />
                </div>
                <div className='body-grid'>
                    <h1 id='main-title'><big>Say hello to <br />ReactJS</big></h1>
                    <p id="text-grid">You will learn how to use <br />the most popular frontend library,<br /> and become a super Ninja developer</p>
                    <button className='btn'>Awesome!</button>
                </div>
                <div  className='card-container'>
                    {cardItems.map((card, index) => {
                        return (
                            <div key={index}>
                                <div className='card'>
                                    <img src={card.img}></img>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
    );
}


export default App;