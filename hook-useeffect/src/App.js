import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [Value, setValue] = useState(10);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Increment counter
      </button>

      {Value}
      <button
        onClick={() => {
          setValue((Value) => Value + 1);
        }}
      >
        Increment Value
      </button>

      {user && user.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

export default App;
