import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>


            <Route path="login/*" element={
            <PublicRoutes>
              <Routes>
                <Route path='/*' element={ <LoginPage /> } />
              </Routes>
            </PublicRoutes>
            } />


            <Route path="/*" element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
            } />


        </Routes>
    </>
  )
}
