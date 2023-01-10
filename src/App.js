import { Button, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, red } from "@mui/material/colors"
import { styled } from "@mui/material/styles"

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#CCC"
    },
    secondary: {
      main: orange[500]
    },
    myCustomColor: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    myVariant: {
      fontSize: "6rem",
      color: orange[500]
    }
  }
});



function App(props) {

  const MyCustomButton = styled(Button)({
    padding: 10

  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="myVariant"> This is my app</Typography>
        <Typography sx={{ color: "myCustomColor.main" }} variant="h6"> Hit the like button!</Typography>
        <Button sx={{ p: 2 }} variant="contained" color="secondary"> Hello from Mui</Button>

      </div>
    </ThemeProvider>
  );
}

export default App;


