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

function App() {
    return (
        <div className = "App">
            <div className = "section1">
                <nav>
                    <img src="images/ironhack-logo.svg" alt=""/>
                    <img src="images/menu-top.svg" className='' alt=""/>
                </nav>
                <div className='content'>
                    <h1>Say hello to ReactJS</h1>
                    <h4>You will learn to use the most popular fronted library, and become a super Ninja Developer</h4>
                    <div className="awesome"></div>
                </div>
            </div>

        </div>
    );
}

export default App;
