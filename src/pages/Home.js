// import "../index.css";
import { initializeFirebase } from "../components/InitializeFirebase";
import AppHeader from "../components/AppHeader";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

function Home() {
  firebase = initializeFirebase();
  const allnotes = [];
  let db = firebase.firestore();
  const [newnote, setnewnote] = useState({ inspector: "", date: "", des: "" });
  const [notes, setnotes] = useState([]);

  function createData(inspector, date, des) {
    return { inspector, date, des };
  }
  useEffect(() => {
    db.collection("notes")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allnotes.push(
            createData(doc.data().inspector, doc.data().date, doc.data().des)
          );
        });
        setnotes(allnotes);
        console.log(notes);
      });
  }, []);

  const SubmitHandler = (e) => {
    if (newnote.inspector != "" && newnote.date != "" && newnote.des != "") {
      db.collection("notes")
        .add(newnote)
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          setnewnote({ ...newnote, inspector: "", des: "", date: "" });
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      console.log("fill all the fields")
    }
  };

  const LogOut =()=>{
    window.location.replace("/")
  };
  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#f03131",
          color: "white",
          float: "right",
          margin: "5px",
          textTransform: "capitalize",
        }}

        onClick={LogOut}
      >
        Logout
      </Button>
      <AppHeader />
      <div className="body">
        <div style={{ height: "20px", margin: "0px" }}></div>

        <Paper
          variant="elevation"
          elevation={3}
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <form onSubmit={SubmitHandler}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h1>Crop Scouting</h1>
              <TextField
                variant="outlined"
                label="Inspector Name"
                style={{ margin: "5px" }}
                onChange={(e) =>
                  setnewnote({ ...newnote, inspector: e.target.value })
                }
                value={newnote.inspector}
              />
              <TextField
                variant="outlined"
                label="Date"
                style={{ margin: "5px", width: "210px" }}
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) =>
                  setnewnote({ ...newnote, date: e.target.value })
                }
                value={newnote.date}
              ></TextField>
              <TextField
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                style={{ margin: "5px" }}
                onChange={(e) =>
                  setnewnote({ ...newnote, des: e.target.value })
                }
                value={newnote.des}
              ></TextField>
              <Button
                variant="contained"
                type="submit"
                style={{ margin: "5px", Color: "rgb(0, 168, 89)" }}
              >
                Save note
              </Button>
            </Grid>
          </form>
        </Paper>

        <TableContainer
          id="table"
          component={Paper}
          style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}
        >
          <h1 style={{ textAlign: "center" }}>Notes</h1>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Inspector</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notes.map((element) => (
                <TableRow key={element.date}>
                  <TableCell>{element.date}</TableCell>
                  <TableCell>{element.inspector}</TableCell>
                  <TableCell>{element.des}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Home;
