import { ThemeProvider } from 'styled-components';
import media from './styles/media.ts'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import AllTodo from './pages/AllTodo';
import CompletedTodo from './pages/CompletedTodo';
import PendingTodo from './pages/PendingTodo';

function App() {
  return (
    <ThemeProvider theme={{ ...media }}>
      <Router basename='/TODO-Redux-Toolkit'>
        <Header />

        <Routes>
          <Route path="/pending" Component={PendingTodo}/>
          <Route path="/completed" Component={CompletedTodo} />
          <Route path="/" Component={AllTodo} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
