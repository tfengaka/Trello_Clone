import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthLayout, WorkspaceLayout } from '~/layout';
import { BoardPage } from '~/pages/Workspace';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
  },
  {
    path: '/',
    element: <WorkspaceLayout />,
    children: [
      {
        path: '/u/:username/boards',
        element: <div>BOARD LIST</div>,
      },
      {
        path: '/b/:id/:slug',
        element: <BoardPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
