import "./App.css";
import Title from "./components/Title.js";
import InformationForm from "./components/InformationForm.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <body>
      <div className="App">
        <Title />
        <InformationForm />
      </div>
    </body>
  );
}

export default App;
