import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { redirect, useNavigate } from "react-router";
import { useAuth } from "react-oidc-context";
import Header from "./Header";
import Lottie from "lottie-react";
import Animation from "../assets/Animation - 1733828306196.json";
import useFetchStudentDataFrmRds from "../fetch/useFetchStudentsDataFrmRds";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function StudentData() {
  useFetchStudentDataFrmRds();

  const auth = useAuth();

  const navigation = useNavigate();

  const { message, data } = useSelector(
    (store) => store.student.fetchStudentDataFrmRds
  );

  const handleClick = () => {
    navigation("/student-form");
  };

  const signOutRedirect = () => {
    navigation("/student-portal");
    auth.removeUser();
  };
  const signOut = () => signOutRedirect();

  // if (!auth.isAuthenticated) {
  //   return redirect("/student-portal");
  // }

  return (
    <div>
      <Header details={{ txt: "Sign out", fn: signOut }} />
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}
      >
        Student Data Portal
      </Typography>

      <div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Button
            variant="contained"
            align="right"
            onClick={handleClick}
            style={{ marginLeft: "auto" }}
          >
            Create New Student
          </Button>
        </Box>
      </div>

      {!!data ? (
        <>
          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                  >
                    Id
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                  >
                    First Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                  >
                    Last Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
                  >
                    Age
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="left"
                      sx={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {row.first_name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {row.last_name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {row.age}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <Lottie animationData={Animation} />
        </Box>
      )}
    </div>
  );
}
