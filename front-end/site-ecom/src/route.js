import {createBrowserRouter,RouterProvider} from "react-router-dom";
import RegisterView from './views/Register';
import UsersList from './routes/Users';
import ArticlesList from './routes/Articles';
import Login from './views/Login';
import ArticleDet from './views/ArticleDet';
import Cart from './views/Cart';


  const Routes = ({login}) => {
    const router = createBrowserRouter([
    {
      path: "/",
      element: <ArticlesList />,
    },
  
    {
      path:"/article/:id",
      element: <ArticleDet />,
    },
  
    {
      path: "/register",
      element: <RegisterView />,
    },
  
    {
      path: "/login",
      element: <Login login={login}/>,
    },
  
    {
      path: "/users",
      element: <UsersList />,
    },
  
    {
      path: "/users/cart/:id",
      element: <Cart />,
    }
  
  ]);

    return (
        <RouterProvider router={router} />
    )
  }

  export default Routes;