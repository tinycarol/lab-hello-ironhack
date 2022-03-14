import './App.css'

function App() {
    return(
        <div>
            <nav>
                <img src="../images/ironhack-logo.svg" alt="Ironhack logo" className='logo'/>
                <img src="../images/menu-top.svg" alt="Menu top" className='hamburger'/>
            </nav>

            <div className="hero"> 
                <div>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular fronted library, and become a super Ninja developer.</p>
                    <button>Awesome</button>
                </div>

                <div>
                    <img src="../images/react-logo.svg" alt="React logo" />
                </div>

            </div>
        </div>
    )
}


export default App