
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage';
import Category from './components/Category';
import Cart from './components/Cart';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch/:id',
        element: <WatchPage />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])


function App() {
  return (
    <Provider store={appStore}>
      <div>
     <RouterProvider router={appRouter} />
    </div>
    </Provider>
    );
}




export default App;
