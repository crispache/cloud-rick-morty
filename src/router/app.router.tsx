import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RickMortyTheme } from 'core/themes';
import { switchRoutes } from './routes';
import { DetailScene, ListScene } from 'scenes';

export const AppRouter = () => {
  return (
    <HashRouter>
      <RickMortyTheme>
        <Routes>
          <Route
            path={switchRoutes.root}
            element={<Navigate to={switchRoutes.list} />}
          />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
        </Routes>
      </RickMortyTheme>
    </HashRouter>
  );
};
