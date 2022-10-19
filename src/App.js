import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Error from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';

function App() {
   return (
      <>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route index element={<Home />} />
                  <Route path='*' element={<Error />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </>
   );
}

export default App;
