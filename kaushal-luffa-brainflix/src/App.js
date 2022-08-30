import Main from "./components/Main/Main";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Upload from "./components/Upload/Upload";

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/video/:videoId">
          <Main />
        </Route>
        <Route path='/upload'>
          <Upload/>
        </Route>

      </Switch>
    </>
  );
};

export default App;
