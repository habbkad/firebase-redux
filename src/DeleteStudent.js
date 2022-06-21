import React from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import app from "./Firebase/Config";
const DeleteStudent = (props) => {
  const db = getFirestore(app);
  const handleDelete = async (e) => {
    await deleteDoc(doc(db, "Users", props.student.id));
  };

  return (
    <div>
      <h3>{props.student.name}</h3>
      <h3>{props.student.gen}</h3>
      <button onClick={handleDelete}>Delete</button>
      <hr />
    </div>
  );
};

export default DeleteStudent;
