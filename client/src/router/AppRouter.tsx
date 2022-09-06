import React from 'react'
import {Route, Routes} from 'react-router-dom'
import GuardedRoute from './GuardedRoute'

import NotFound from '../pages/NotFound/NotFound'
import MainLayout from '../layouts/MainLayout'
import useTypedSelector from '../hooks/useTypedSelector'
import Spinner from '../components/Spinner/Spinner'
import EmptyLayout from '../layouts/EmptyLayout';

const Login = React.lazy(() => import('../pages/Auth/Login'))
const Documents = React.lazy(() => import('../pages/Documents/Documents'))
const Calculators = React.lazy(() => import('../pages/Calculators/Calculators'))
// const Landing = React.lazy(() => import('../pages/Landing/Landing'))

const AppRouter = () => {
  const {isAuth, initialLoading} = useTypedSelector(state => state.user)

  if (initialLoading) return (
    <Routes>
      <Route path="*" element={<MainLayout/>}>
        <Route index element={<Spinner/>}/>
      </Route>
    </Routes>
  )

  const globalRoutes = () => {
    return (
      <Route
        path="/"
        element={<MainLayout/>}
      >
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Route>
    )
  }

  const notAuthenticatedRoutes = () => {
    return (
      <Route
        path="/"
        element={<GuardedRoute isAuth={isAuth} permission="notAuth"><EmptyLayout/></GuardedRoute>}
      >
        <Route path="login" element={<Login/>}/>
      </Route>
    )
  }

  return (
    <Routes>
      {globalRoutes()}
      {notAuthenticatedRoutes()}
      <Route
        path="/"
        element={<GuardedRoute isAuth={isAuth}><MainLayout/></GuardedRoute>}
      >
        <Route index element={<Documents/>} />
        <Route path="documents" element={<Documents/>} />
        <Route path="calculators" element={<Calculators/>} />
        {/*	<Route path="create" element={<CreateCategoryForm/>}/>*/}
        {/*	<Route path=":categoryId" element={<CategoryPage/>}/>*/}
        {/*</Route>*/}
      </Route>
    </Routes>
  )
}

export default AppRouter
