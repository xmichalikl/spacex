import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import PageContainer from './components/PageContainer';
import './App.css';

const client = new Client({
  url: 'https://api.spacex.land/graphql/',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <PageContainer />
    </Provider>
  );
}

export default App;
