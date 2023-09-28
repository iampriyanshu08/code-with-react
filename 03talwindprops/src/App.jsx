import "./App.css";
import Card from "./Components/Card";

function App() {
  let myObj = {
    username:"ashu",
    age:23
  }
  let newArray = [1,23,23,23,"ram","rachit"]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 font-bold rounded-xl mb-4">
        Talwind and Props
      </h1>
      <Card username= "Priyanshu" btntext = "click me "/>
      <Card username= "Ashu"  />
      
    </>
  );
}

export default App;
