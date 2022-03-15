import './App.css'

const features = [
    {
        title: 'Declarative',
        img: './images/icon1.png',
        description: 'React makes it painless to create interactive UIs.'
    },
    {
        title: 'Components',
        img: './images/icon2.png',
        description: 'Build encapsulated components that manage their state.'
    },
    {
        title: 'Single-Way',
        img: './images/icon3.png',
        description: 'A set of immutable values are passed to the components.'
    },
    {
        title: 'JSX',
        img: './images/icon4.png',
        description: 'Statically-typed, designed to run on modern browsers.'
    }
]

function App() {
    return(
        <div>

            <div className="hero"> 
                <div>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular fronted library, and become a super Ninja developer.</p>
                    <button>Awesome!</button>
                </div>

                <img src="../images/react-logo.svg" alt="React logo" />
            </div>

            <div className="features">
                {features.map(feature => 
                <div>
                    <img src={feature.img} alt="Feature icon" className="features-icons" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>)}
            
            </div>
        </div>
    )
}


export default App