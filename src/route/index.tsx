import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Complaints from '../pages/complaints/Complaints.tsx';
import RootLayout from '../layout/rootLayout.tsx';
import ComplaintsDetail from '../pages/ComplaintsDetail/complaintsDetail.tsx';
import Manager from '../pages/manager/manager.tsx';
import ManagerAnswer from '../pages/manager/managerAnswer.tsx';
import ManagerInfo from '../pages/manager/managerInfo.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/complaints',
        children: [
          { index: true, element: <Complaints /> },
          {
            path: '/complaints/detail',
            element: <ComplaintsDetail />,
          },
        ],
      },
      {
        path: '/manager',
        children: [
          { index: true, element: <Manager /> },
          { path: '/manager/answer', element: <ManagerAnswer /> },
          { path: '/manager/ai', element: <ManagerInfo /> },
        ],
      },
    ],
  },
]);

export default routes;
