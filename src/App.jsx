import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/contacts',
        element: <ContactPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
