import './App.css'
import {  Header } from './components'
import { Insights, Charts, Documentation } from './pages';
import tw from 'twin.macro'

import { createBrowserRouter,
     createRoutesFromElements,
      Route, Outlet, RouterProvider } from 'react-router-dom';


const MainContainer = tw.div`
    flex
    flex-col
    [background-color: #363062]
    items-center
    w-full
    h-screen
`;


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Insights />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/API' element={<Documentation />} />
      </Route>
    )
  )

  return (

    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {

    return (
      <MainContainer>
        <Header />
        <Outlet /> 
      </MainContainer>
    )
  }
  
  
  export default App;

















