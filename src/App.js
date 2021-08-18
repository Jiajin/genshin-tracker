import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import genshinData from "./genshin/characters";
//import { Container, Row, Button, Col } from "react-bootstrap";
import GenshinTracker from "./components/GenshinTracker/GenshinTracker";

function App() {
  return (
    <div fluid className="justify-content-center">
      <GenshinTracker></GenshinTracker>
    </div>
  );
}

export default App;
