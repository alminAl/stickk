import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardHome from './Components/Dashboard/DashboardHome.jsx';
import Profile from './Components/Dashboard/Profile.jsx';
import Layout from './Layout/Layout.jsx';
import Error from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import SignIn from './Pages/SignIn.jsx';

function App() {
   return (
      <>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route index element={<Home />} />
                  <Route path='login' element={<SignIn />} />
                  <Route path='signin' element={<Register />} />

                  {/* dashboard route */}
                  <Route path='dashboard' element={<DashboardHome />}>
                     <Route path='profile' element={<Profile />} />
                  </Route>
                  <Route path='*' element={<Error />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </>
   );
}

export default App;
