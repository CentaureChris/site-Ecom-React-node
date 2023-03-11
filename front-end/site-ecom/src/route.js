import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterView from './views/Register';
import UsersList from './routes/Users';
import ArticlesList from './routes/Articles';
import Login from './views/Login';
import ArticleDet from './views/ArticleDet';
import Cart from './views/Cart';
import AdminView from "./views/AdminView";
import EditArticle from "./views/EditArticle";


const Routes = ({ login, deleteArt, register }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ArticlesList />,
    },

    {
      path: "/article/:id",
      element: <ArticleDet deleteArt={deleteArt} />,
    },

    {
      path: "/article/edit/:id",
      element: <EditArticle />,
    },

    {
      path: "/register",
      element: <RegisterView register={register} />,
    },

    {
      path: "/login",
      element: <Login login={login} />,
    },

    {
      path: "/users",
      element: <UsersList />,
    },

    {
      path: "/users/cart",
      element: <Cart />,
    },

    {
      path: "/admin",
      element: <AdminView />,
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default Routes;