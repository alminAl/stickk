import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
                  <Route path='sign_in' element={<SignIn />} />
                  <Route path='register' element={<Register />} />
                  <Route path='*' element={<Error />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </>
   );
}

export default App;
