import './App.css';
import LoginForm from './Login/LoginForm'

function App() {
  return (
    <div className="App">
      <h1 htmlFor='title' id='title'>TDD example with React js</h1>
      <LoginForm submit={values => alert(JSON.stringify(values))} />
    </div>
  );
}

export default App;
