import "./App.css";
import NewComponent from "./components/NewComponent";

function App() {
  const user = {name:"prashant",id:13212,password:"anything"}
  return (
    <div className="App">
    <NewComponent {...user}/>
    </div>
  );
}

export default App;
