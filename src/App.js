import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Well come to Tech Talk</h1>
        <button className='mybtn' onClick={() => navigate('/users')}>User</button>
      </header>
    </div>
  );
}

export default App;
