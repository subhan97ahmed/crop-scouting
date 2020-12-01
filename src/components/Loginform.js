import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

function Loginform({ Login }) {
  const [details, setDetails] = useState({ email: "", pass: "" });
  const SubmitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form noValidate autoComplete="off" onSubmit={SubmitHandler}>
      <TextField
        id="txtemail"
        label="Email"
        variant="outlined"
        height="20px"
        style={{ margin: "5px" }}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
        value={details.email}
      />
      <br />
      <Divider></Divider>
      <TextField
        id="txtpass"
        label="Password"
        variant="outlined"
        type="Password"
        height="20px"
        style={{ borderColor: "#009933", margin: "5px" }}
        onChange={(e) => setDetails({ ...details, pass: e.target.value })}
        value={details.pass}
      />
      <br />
      <Button
        type="submit"
        variant="outlined"
        style={{ backgroundColor: "rgb(0, 168, 89)", margin: "5px" }}
      >
        Login
      </Button>
    </form>
  );
}

export default Loginform;
