import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function ComingSoon() {
  return (
    <div>
      <Box sx={{ width: "100%", alignItems: "center", mt: "200px" }}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: "75%",
            height: 200,
            margin: "auto",
            textAlign: "center",
            p: 5,
          }}
        >
          <ConstructionIcon fontSize="large" />
          <Typography variant="h4" component="div" gutterBottom>
            Coming Soon!
          </Typography>
          <Typography variant="6" component="div" gutterBottom>
            We're constantly working on new features. Check back for more!
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
