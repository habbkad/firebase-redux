import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import app from "./Firebase/Config";
import { getFirestore } from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");
  const db = getFirestore(app);
  const handlePushToFirebase = async (e) => {
    e.preventDefault();
    let person = {
      name,
      gen,
    };
    try {
      const docRef = await addDoc(collection(db, "users"), person);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Gen"
        value={gen}
        onChange={(e) => {
          setGen(e.target.value);
        }}
      />
      <br />
      <button onClick={handlePushToFirebase}>submit</button>
    </div>
  );
}

export default App;
