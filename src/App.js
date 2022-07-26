import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpage />} />
      </Routes>
    </div>
  );
}

export default App;
