import './App.css';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <Form/>

      <div style={{ width: '100%' }}>
        <Control/>
        <Table />
      </div>

    </div>
  );
}

export default App;
