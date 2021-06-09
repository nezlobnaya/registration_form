import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import RecordsList from '../RecordsList/RecordsList';
import RecordSuccess from '../Success/RecordSuccess';
import RecordAdd from '../Form/Form';


function Main() {
    return(
      <Switch>
        <Route exact path="/records/new" component={RecordAdd} />
        <Route exact path="/records" component={RecordsList} />
        <Route exact path="/success" component={RecordSuccess} />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }

export default Main;