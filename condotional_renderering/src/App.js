import './App.css';
import PackingList from './PackingList';

function App(...props) {
  return (
    <div>
    <PackingList {...props}/>
    </div>
  );
}

export default App;
