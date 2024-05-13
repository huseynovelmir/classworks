import BlueContainer from "./components/blueContainer";
import Container from "./components/container";
import GreenContainer from "./components/greenContainer";
import RedContainer from "./components/redContainer";

function App() {
  return (
    <div className="app">
      <Container />
      <div className="containers">
        <BlueContainer />
        <GreenContainer />
        <RedContainer />
      </div>
    </div>
  );
}

export default App;
