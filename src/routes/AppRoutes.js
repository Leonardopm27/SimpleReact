    import { Routes, Route } from 'react-router-dom';

import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import Principal from '../paginas/Principal';

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/cadastro"
        element={<Cadastro />}
      />

      <Route
        path="/principal"
        element={<Principal />}
      />

    </Routes>
  );
}

export default AppRoutes;