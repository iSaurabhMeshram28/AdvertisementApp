import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashBoardPage";
import CreateAdsPage from "./pages/CreateAdsPage";
import Navbar from "./components/Navbar";
import TextAdForm from "./pages/TextAdForm";
import MediaAdForm from "./pages/MediaAdForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/create-ads" exact component={CreateAdsPage} />
          <Route path="/text-ad-form" exact component={TextAdForm} />
          <Route path="/media-ad-form" exact component={MediaAdForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
