import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <> 
    <CssBaseline />
    <div className="App">
      Hello
      <br />
      <Button  variant="contained">Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      </div>
  </>
  );
}

export default App;
