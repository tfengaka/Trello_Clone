import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthLayout, WorkspaceLayout } from '~/layout';
import { SignIn, SignUp } from '~/pages/Auth';
import { BoardPage } from '~/pages/Workspace';
import CardModal from '~/pages/Workspace/CardModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <WorkspaceLayout />,
    children: [
      {
        path: 'u/:username/boards',
        element: <div>BOARD LIST</div>,
      },
      {
        path: 'b/:id/:slug',
        element: <BoardPage />,
      },
      {
        path: 'c/:id/:slug',
        element: <CardModal />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
