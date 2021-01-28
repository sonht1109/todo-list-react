import './App.css';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';
import { IntlProvider } from "react-intl";
import vi from './translations/vi.json'
import en from './translations/en.json'
import { useSelector } from 'react-redux';

const locale = navigator.language.split('-')[0]

const messages = {
  en, vi
}

function App() {

  const locale = useSelector(state => state.locale)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <Form />
        <div style={{ width: '100%' }}>
          <Control />
          <Table />
        </div>

      </div>
    </IntlProvider>
  );
}

export default App;
