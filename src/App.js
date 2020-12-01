import { useState } from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import "./components/Loginform.js";
import "firebase/auth";
import Loginform from "./components/Loginform";
import AppHeader from "./components/AppHeader";
import { initializeFirebase } from "./components/InitializeFirebase.js";

function App() {
  let firebase = initializeFirebase();
  const [currentuser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (details.email != null && details.pass != null) {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          details.email.toString(),
          details.pass.toString()
        )
        .then((user) => {
          console.log(user);
          setCurrentUser(user);
          window.location.replace(document.URL + "Home");
          console.log("logged in");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorMessage);
        });
    }
  };

  return (
    <div className="App">
      <AppHeader />
      <div className="body">
        <div style={{ height: "20px", margin: "0px" }}></div>

        <div className="login">
          <Paper variant="elevation" elevation={3}>
            <h1 style={{ margin: "10px", fontFamily: "Roboto" }}>Login</h1>
            <Loginform Login={Login} />
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default App;
