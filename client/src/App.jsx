// import { EditProfile, Login, Signin, Landing, CreateTask } from './pages'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './hooks/AuthProvider';
import Routes from './routes';

function App() {



  return (
    <>
      {/* <Router>
        <Routes>

          <Route path="/login" exact element={<Login />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/editProfile/:id" exact element={<EditProfile />} />
          <Route path="/landing" exact element={<Landing />} />
          <Route path="/createTask" exact element={<CreateTask />} />




        </Routes>
      </Router> */}
      <AuthProvider>
        <Routes />
      </AuthProvider>


    </>
  )
}

export default App
