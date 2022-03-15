import './app.css';
import { navBar } from '../Nav/Nav';
import { mainBlock } from '../Main/Main';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <navBar />
      </header>
      <mainBlock />
    </div>
  );
}

export { App };