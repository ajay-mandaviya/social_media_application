import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="flex">
      <header className="App-header flex">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span className="text-black">mockBee!</span>
        </h1>
        <p className="brand-description italic">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
