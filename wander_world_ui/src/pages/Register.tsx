import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { DateField } from "@mui/x-date-pickers/DateField";

function Register() {
  return (
    <Container
      className="mt-5"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper className="w-50 h-50 text-center" elevation={1}>
        <div className="m-5">
          <div className="pb-3">
            <h1>Register</h1>
          </div>
          <div className="pb-3">
            <TextField required label="Email" type="text" />
          </div>
          <div className="pb-3">
            <TextField required label="Username" type="text" />
          </div>
          <div className="pb-3">
            <TextField required label="Password" type="text" />
          </div>
          <div className="pb-3">
            <DateField required label="Date of Birth" />
          </div>
          <div>
            <Button variant="contained">Register</Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default Register;
