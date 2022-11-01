import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import Layout from './Layout/Layout.jsx';
import CommitsPage from './Pages/Commits.page.jsx';
import CommitTypePage from './Pages/CommitType.page.jsx';
import Error from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';
import ProfilePage from './Pages/Profile.page.jsx';
import Register from './Pages/Register.jsx';
import SignIn from './Pages/SignIn.jsx';

function App() {
   const { user } = useAuthContext();
   return (
      <>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route index element={<Home />} />
                  <Route path='login' element={!user ? <SignIn /> : <Navigate to='/profile' />} />
                  <Route path='signin' element={!user ? <Register /> : <Navigate to='/profile' /> } />

                 
                  <Route path='profile' element={user ? <ProfilePage /> : <Navigate to='/'/> } />
                  <Route path='commit' element={user ? <CommitsPage /> : <Navigate to='/'/> }  />
                  <Route path='commit/:commit_type' element={user ? <CommitTypePage /> : <Navigate to='/'/> } />
                  
                  <Route path='*' element={<Error />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </>
   );
}

export default App;
