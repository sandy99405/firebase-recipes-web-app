/* import logo from './logo.svg'; */
import {useState/* , react */}from 'react'
import './App.css';
import FirebaseAuthService from './FirebaseAuthService';
/* import firebase from './FirebaseConfig'; */
import LoginForm from './Components/LoginForm';

function App() {

  const [user,setUser] = useState(null);
   
  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
        <div className="title-row">
          <h1 className="title">Firebase Recipes</h1>
          <LoginForm existingUser={user}></LoginForm>
        </div>
    </div>
  );
}

export default App;
