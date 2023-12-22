import {  
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  InputLabel,
  MenuItem,
  Select,  
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TextAdForm = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const history = useHistory();

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    // Redirect to the Create Ads page after the snackbar closes
    history.push("/create-ads");
  };

  const handleBackButtonClick = () => {
    // Handle back button click
    history.push("/create-ads");
  };

  const handleSubmit = () => {
    
    setSnackbarOpen(true);

    // Close the snackbar after 0.6 seconds
    setTimeout(handleSnackbarClose, 1000);
  };

  return (
    <div style={{ height: `calc(100vh - 125px)`, padding: "30px" }}>
      {/* Assuming your navbar has a fixed height of 64px */}
      <Card style={{ height: "100%", width: "100%" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontWeight: "bold",
              fontFamily: "Adobe Clean, sans-serif",
              padding: "10px",
              paddingLeft: "13px",
              fontSize: "1.5rem",
            }}
          >
            Create Text & Media
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Left Half */}
            <div style={{ display: "flex", flex: "1", padding: "20px" }}>
              <div style={{ flex: "1" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    fontFamily: "Adobe Clean, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Heading 01
                </Typography>
                <TextField
                  label="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  InputLabelProps={{
                    style: {
                      color: "lightgray",
                      fontFamily: "Adobe Clean, sans-serif",
                      fontSize: "0.875rem",
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    marginTop: "10px",
                    fontFamily: "Adobe Clean, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Heading 02
                </Typography>
                <TextField
                  label="Add a heading that would make users interested"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  InputLabelProps={{
                    style: {
                      color: "lightgray",
                      fontFamily: "Adobe Clean, sans-serif",
                      fontSize: "0.875rem",
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    marginTop: "10px",
                    fontFamily: "Adobe Clean, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Business Name
                </Typography>
                <TextField
                  label="Add your business name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  InputLabelProps={{
                    style: {
                      color: "lightgray",
                      fontFamily: "Adobe Clean, sans-serif",
                      fontSize: "0.875rem",
                    },
                  }}
                />
              </div>

              {/* Right Half */}
              <div style={{ flex: "1", marginLeft: "20px" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    fontFamily: "Adobe Clean, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Description 01
                </Typography>
                <TextField
                  label="Enter Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5.65}
                  margin="dense"
                  InputLabelProps={{
                    style: {
                      color: "lightgray",
                      fontFamily: "Adobe Clean, sans-serif",
                      fontSize: "0.875rem",
                    },
                  }}
                />
                <InputLabel
                  id="select-label"
                  style={{
                    marginTop: "20px",
                    fontFamily: "Adobe Clean, sans-serif",
                    paddingBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "normal",
                  }}
                >
                  Button Label
                </InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  style={{fontFamily: "Adobe Clean, sans-serif"}}
                >
                  <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option1">Option 1</MenuItem>
                  <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option2">Option 2</MenuItem>
                  <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option3">Option 3</MenuItem>
                </Select>
              </div>
            </div>

            {/* TextField below */}
            <div style={{ padding: "10px 20px" }}>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  fontFamily: "Adobe Clean, sans-serif",
                  fontSize: "1rem",
                }}
              >
                Website URL
              </Typography>
              <TextField
                label="Add the URL of the Landing page you want to redirect user to"
                variant="outlined"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  style: {
                    color: "lightgray",
                    fontFamily: "Adobe Clean, sans-serif",
                    fontSize: "0.875rem",
                  },
                }}
              />
            </div>
            <div
              style={{ position: "absolute",
              bottom: "50px",
              right: "20px" }}
            >
              <Button
                variant="outlined"
                style={{ color: "black", marginRight: "20px" }}
                onClick={ handleBackButtonClick }
              >
                Back
              </Button>
              <Button
                variant="contained"
                style={{ marginRight: "20px" }}
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={isSnackbarOpen}
        onClose={handleSnackbarClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",            
          }}
        >
          <CheckCircleOutlineIcon style={{ fontSize: 40, color: "green" }} />
          <Typography variant="subtitle1">Submitted</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TextAdForm;
