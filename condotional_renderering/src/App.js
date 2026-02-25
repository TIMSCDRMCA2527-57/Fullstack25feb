import './App.css';
import PackingList from './PackingList';

function App(...props) {
  return (
    <PackingList {...props}/>
  );
}

export default App;
