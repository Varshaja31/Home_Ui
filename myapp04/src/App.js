import Home from '../src/Pages/home'
import Tasks from '../src/Pages/tasks'
import Email from '../src/Pages/email'
import Profile from '../src/Pages/profile'
import Settings from '../src/Pages/settings'
import  { BrowserRouter,Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
        <Route exact path= "/" element={<Home></Home>} />
        <Route exact path= "/tasks" element={<Tasks></Tasks>} />
        <Route exact path="/email" element={<Email></Email>}  />
        <Route exact path="/profile" element={<Profile></Profile>}  />
        <Route path="/settings" element={ <Settings></Settings>} />
        
    </Routes>
    
    </BrowserRouter>
    

    
    
    </>
  );
}

export default App;
