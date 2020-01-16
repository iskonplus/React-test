import React from "react";
import "./App.css";
import { UserList } from "./components/UserList";

const users = [
  {
    name: "Name_1",
    age: Math.round(Math.random() * 100),
    sex: "male"
  }, 
  {
    name: "Name_2",
    age: Math.round(Math.random() * 100),
    sex: "male"
  },
  {
    name: "Name_3",
    age: Math.round(Math.random() * 100),
    sex: "male"
  }
]

function App() {

  return (
    <div>
      <UserList items={users}/>
    </div>

  );
}



export default App;
