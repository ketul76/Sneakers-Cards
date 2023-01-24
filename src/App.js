import './App.css';
import data from './data';
import Cards from './Cards';
import Filter from './Filter';

function App() {
  return (
    <>
      <Filter />
      <Cards data={data} />
    </>
  );
}

export default App;
