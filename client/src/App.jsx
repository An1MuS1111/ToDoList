// import { EditProfile, Login, Signin, Landing, CreateTask } from './pages'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './hooks/AuthProvider';
import Routes from './routes';

function App() {



  return (
    <>
      <AuthProvider>
        <Routes />

      </AuthProvider>


    </>
  )
}

export default App
