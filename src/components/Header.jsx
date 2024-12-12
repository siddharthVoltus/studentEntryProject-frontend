import { Box, Button, Container, Grid2, Stack } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Header({ details }) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: "1", color: "#ffffff", fontWeight: "bold" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <p>Student Portal</p>
          </Link>
        </Typography>
        <Box>
          <Button
            variant="contained"
            onClick={details.fn}
            sx={{ backgroundColor: "#fff", color: "#1976d2" }}
          >
            {details.txt}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
