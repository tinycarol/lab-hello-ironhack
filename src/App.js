import Navbar from './component/misc/Navbar/Navbar'



import './App.css';

const developmentTools = [
    {
        img: <img src='/images/icon1.png' alt='icon' />,
        applications: "Declarative",
        explanation: 'React makes it painless to create interactive Uls.'
    },
{
    img: <img src='images/icon2.png' alt="Icon2" />,
    applications: 'Components',
    explanation: "Build encapsulated components that manage their state"
},
{
    img: <img src='images/icon3.png' alt='Icon3' />,
    applications: 'Single-Way',
    explanation: 'A set of inmutable values are to the component'
},
{
    img: <img src='images/icon4.png' alt="Icon4" />,
    applications: 'JSX',
    explanation: 'Statically-typed, designed to run on modern browsers',
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
    return(
        <div className = "App">
        <div className = "section1">
        <div>
              <Navbar /> 
               </div> 
            <nav>
                <img src="images/ironhack-logo.svg" alt="Logo"/>
                <img src="images/menu-top.svg" className='' alt="Menu"/>
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