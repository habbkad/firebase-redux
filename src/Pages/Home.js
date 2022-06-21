import { async } from "@firebase/util";
import React from "react";
import { Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../Redux/Actions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login", { replace: true });
        dispatch(authUser(false));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <Button onClick={handleLogOut}> Log out</Button>
    </div>
  );
};

export default Home;
