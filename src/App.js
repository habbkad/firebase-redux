import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "./Redux/Actions";
import app from "./Firebase/Config";
import { getFirestore } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import DeleteStudent from "./DeleteStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Navigation/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
