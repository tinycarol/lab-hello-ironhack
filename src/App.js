import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">

      <section id='header'>
        <header className="header">
          <div className='header__wrapper wrapper'>
            <div className='header__menu'>
                <img src='/images/ironhack-logo.svg' className='header__logo' alt='Ironhack logo' />
                <img src='/images/menu-top.svg' className='header__top' alt='hamburger menu'/>
              </div>

              <div className='header__content'>
                <h1 className='header__title'>Say Hello to ReactJs</h1>
                <p className='header__text'>You will learn how to use the most popular frontend library, and become a super ninja Developer</p>
                <a className="header__btn" href="#cards" rel="noopener noreferrer">Awesome!</a>
              </div>
          </div>
        </header>
      </section>

      <section id='cards'>
        <div className='wrapper'>
          <div className='cards'>
            <div className='cards__single'>
              <img src='/images/icon1.png' className='cards__img' alt='declarative icon' />
              <h2 className='cards__title'>Declarative</h2>
              <p className='cards__text'>React make it painless to create interactive UIs.</p>
            </div>

            <div className='cards__single'>
              <img src='/images/icon2.png' className='cards__img' alt='components icon' />
              <h2 className='cards__title'>Components</h2>
              <p className='cards__text'>Build encapsulated components that manage their state.</p>
            </div>

            <div className='cards__single'>
              <img src='/images/icon3.png' className='cards__img' alt='single-way icon' />
              <h2 className='cards__title'>Single-Way</h2>
              <p className='cards__text'>A set of immnutable values are passed to the component's</p>
            </div>

            <div className='cards__single'>
              <img src='/images/icon4.png' className='cards__img' alt='jsx icon' />
              <h2 className='cards__title'>JSX</h2>
              <p className='cards__text'>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
