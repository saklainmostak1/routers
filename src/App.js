
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import PostDetails from './component/POstDetails/PostDetails';
import Posts from './component/Posts/Posts';
import Products from './component/Products/Products';
import Main from './layout/Main';


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>  , 
      children:[
        {path: '/' , element: <Home></Home> },
        {path: '/home' , element: <Home></Home> },
        {path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends> 
        },


        {
          path: '/friend/:friendId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetail></FriendDetail>
        },
        {
          path: '/posts',
          loader: async() => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }

    ] 
  },

    {path: 'about' , element: <About></About> },
    {path: '*', element: <div>This page not found: 404</div> }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}  ></RouterProvider>

    </div>
  );
}

export default App;
