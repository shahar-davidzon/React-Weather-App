import '../styles/App.css';
import SearchBar from './SearchBar';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/normalize.css';



function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>WEATHER APP</h1>
        <SearchBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
