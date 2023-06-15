import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import MainContainer from './components/MainContainer';
import './App.css';

const client = new Client({
  url: 'https://rickandmortyapi.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <MainContainer />
    </Provider>
  );
}

export default App;
