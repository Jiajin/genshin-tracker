import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import { Container, Row, Button, Col } from "react-bootstrap";
import GenshinTracker from "./components/GenshinTracker";

function App() {
  return (
    <div fluid className="justify-content-center">
      <GenshinTracker></GenshinTracker>
    </div>
  );
}

export default App;
