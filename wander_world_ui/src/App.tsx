import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, colors, ThemeProvider } from "@mui/material"
import "./index.css"

import Home from "./pages/Home";
import Login from "./components/Login";
import Feed from "./pages/Feed";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import Protected from "./components/Protected";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: colors.deepOrange[700]
    },
    success: {
      main: colors.green[800]
    },
    info: {
      main: colors.teal[400]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Notification />
        <Login />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Protected><Feed /></Protected>} />
          <Route path="/community" element={<Protected><Community /></Protected>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path="/feed/create" element={<Protected><CreatePost /></Protected>} />
        </Routes>
      </div>
    </LocalizationProvider>
    </ThemeProvider>
    
  );
}

export default App;
