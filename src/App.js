import './App.css';

function App() {
return (
    <div className="App">
        <header className='App-header'>
            <nav>
                <div>
                    <img src="/images/ironhack-logo.svg" alt="Ironhack Logo" />
                </div>
                <div>
                    <img src="/images/menu-top.svg" alt="Ironhack Logo" />
                </div>
            </nav>
            <div>
                <p>Say Hello to ReactJS</p>
            </div>
            <div>
                <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
            </div>
            <div>
                <button>Awesome</button>
            </div>
        </header>
        <div className='App-cards'>
            <div>
                <img src="/images/icon1.png" alt="" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
                <img src="/images/icon2.png" alt="" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div>
                <img src="/images/icon3.png" alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components</p>
            </div>
            <div>
                <img src="/images/icon4.png" alt="" />
                <h2>JSX</h2>
                <p>Statically typed, designed to run on modern browsers</p>
            </div>

        </div>

    </div>
)
}
export default App;
