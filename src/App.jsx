import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
const NFP = lazy(() => import('./pages/NFP'))

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='*' element={<NFP />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App