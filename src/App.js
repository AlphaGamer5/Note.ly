import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Typos from './components/E01.Typography';
import { Container, Typography } from '@mui/material';
import Buttons from './components/E02.Buttons';
import Icons from './components/E03.Icons';
import theme from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'
import TextFields from './components/E04.TextFields';
import Layout from './pages/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Typography
                  variant="h4"
                >
                  Home
                </Typography>
              </Route>
              <Route path="/typo">
                <Typos />
              </Route>
              <Route path="/btns">
                <Typography>
                  Hey Gang
                </Typography>
                <Buttons />
              </Route>
              <Route path="/icons">
                <Icons />
              </Route>
              <Route path="/textfields">
                <TextFields />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/notes">
                <Notes />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
