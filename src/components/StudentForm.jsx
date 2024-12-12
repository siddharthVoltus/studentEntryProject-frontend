import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, Container, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate, redirect } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useAuth } from "react-oidc-context";

export default function StudentForm() {
  const auth = useAuth();
  const navigation = useNavigate();
  const [studentObj, setStudentObj] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(studentObj),
    };
    const res = await fetch(
      "https://enesku5f5k.execute-api.eu-north-1.amazonaws.com/prod/post-users",
      options
    );
    const data = await res.json();
    console.log(data);
    if (data.userId) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  const handleBack = () => {
    navigation("/");
  };

  const signOutRedirect = () => {
    const clientId = "44atgttl25bga3nahgbvgf54kv";
    const logoutUri =
      "https://main.d1cn25y42jo13s.amplifyapp.com/student-portal";
    const cognitoDomain =
      "https://eu-north-1syo4lgo3t.auth.eu-north-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const signOut = () => signOutRedirect();

  return (
    <>
      <Header details={{ txt: "Sign out", fn: signOut }} />
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{ width: "100px" }}
          type="button"
          onClick={handleBack}
        >
          Back
        </Button>
        <Container maxWidth="md">
          <form
            onSubmit={handleFormSubmit}
            style={{
              border: "1px solid #cecece",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <Stack spacing={4}>
              <TextField
                id="FIRSTNAME"
                label="first Name"
                variant="outlined"
                onChange={(e) =>
                  setStudentObj({ ...studentObj, firstName: e.target.value })
                }
              />
              <TextField
                id="LASTNAME"
                label="Last Name"
                variant="outlined"
                onChange={(e) =>
                  setStudentObj({ ...studentObj, lastName: e.target.value })
                }
              />
              <TextField
                id="AGE"
                label="Age"
                variant="outlined"
                onChange={(e) =>
                  setStudentObj({ ...studentObj, age: e.target.value })
                }
              />
              <Button
                variant="contained"
                align="right"
                sx={{ width: "100px" }}
                type="submit"
              >
                Create
              </Button>
              <ToastContainer />
            </Stack>
          </form>
        </Container>
      </Box>
    </>
  );
}
