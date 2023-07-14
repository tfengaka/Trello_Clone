import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HOME</div>,
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
