import { EditProfile, Login, Signin, Landing, CreateTask } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {



  return (
    <>
      <Router>
        <Routes>

          <Route path="/login" exact element={<Login />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/editProfile" exact element={<EditProfile />} />
          <Route path="/landing" exact element={<Landing />} />
          <Route path="/createTask" exact element={<CreateTask />} />




        </Routes>
      </Router>
    </>
  )
}

export default App
