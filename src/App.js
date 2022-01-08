import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
      </div>
    </Provider>
  );
}

export default App;
