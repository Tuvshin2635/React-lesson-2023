import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 769,
      lg: 1140,
      xl: 1440,
    },
  },
});

const GridMUI = () => {
  return (
    <div>
      <h1> DAY 60 MUI Grid</h1>
      <ThemeProvider theme={theme}>
        <main>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                First Column
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>Second Column</Box>
            </Grid>
          </Grid>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default GridMUI;
