import React, {Component} from 'react';
import FieldLevelValidationForm from './redux-controls/FieldLevelValidationForm'
import store from './store';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <h1>Redux Form</h1>
          <h2>Field level validation sample using react bootstrap</h2>
          <FieldLevelValidationForm onSubmit={values => alert(JSON.stringify(values))}/>
        </div>
      </Provider>
    );
  }
}

export default App;
