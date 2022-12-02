import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { AppRoute } from './routes';

export class App extends Component {
  render(){
    return (
      <div className="App">
      <AppRoute/>
    </div>
  );
}
}
