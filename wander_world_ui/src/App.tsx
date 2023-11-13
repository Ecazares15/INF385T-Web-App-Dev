import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, colors, ThemeProvider } from "@mui/material"

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: "#f79256"
    },
    success: {
      main: "#5BC2A3"
    },
    info: {
      main: "#00b2ca"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Notification />
        <Login />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed/create" element={<CreatePost />} />
        </Routes>
      </div>
    </LocalizationProvider>
    </ThemeProvider>
    
  );
}

export default App;
