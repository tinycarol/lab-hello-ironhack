import './App.css';

const developmentTools = [
    {
        img : <img src="images/icon1.png" alt=""/>,
        aplications : 'Declarative', 
        explanation : 'React makes it painless to create interactive Uls.',
    },
    {
        img : <img src="images/icon2.png" alt=""/>,
        aplications : 'Components', 
        explanation : 'Build encapsulated compoenents that manage their state.',
    },
    {
        img : <img src="images/icon3.png" alt=""/>,
        aplications : 'Single-Way', 
        explanation : 'A set of immutable values are passed to the component´s.',
    },
    {
        img : <img src="images/icon4.png" alt=""/>,
        aplications : 'JSX', 
        explanation : 'Statically-typed, designed to run on modern browsers.',
    }
];

function Card(props) {
    const {img, aps, exp} = props;
    return (
        <div>
            {img}
            <h4>{aps}</h4>
            <p>{exp}</p>
        </div>
    )
}

function App() {
    return (
        <div className = "App">
            <div className = "section1">
                <nav>
                    <img src="images/ironhack-logo.svg" alt=""/>
                    <img src="images/menu-top.svg" className='' alt=""/>
                </nav>
                <div className='content'>
                    <h1>Say hello to <br></br>ReactJS</h1>
                    <p>You will learn to use <br></br> the most popular fronted library,<br></br> and become a super Ninja Developer</p>
                    <div className="awesome"><b>Awesome!</b></div>
                </div>
            </div>
            <div className = "section2"> 
                <div className="card">
                    {developmentTools.map((el, index) => {
                        return (<Card className = "card"
                            img={el.img} 
                            aps={el.aplications} 
                            exp={el.explanation}
                            key={index}> 
                            </Card>)
                    })}
                </div>
            </div>
        </div>
        
    );
}

export default App;
