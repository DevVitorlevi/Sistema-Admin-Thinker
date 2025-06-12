import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/auth/Login';
import Home from './pages/dashboard/Home';
import MateriasList from './pages/entities/Materias/List';
import MateriasCreate from './pages/entities/Materias/Create';
import MateriasEdit from './pages/entities/Materias/Edit';
import QuizzesList from './pages/entities/Quizzes/List';
import QuizzesCreate from './pages/entities/Quizzes/Create';
import QuizzesEdit from './pages/entities/Quizzes/Edit';
import QuestoesList from './pages/entities/Questoes/List';
import QuestoesCreate from './pages/entities/Questoes/Create';
import QuestoesEdit from './pages/entities/Questoes/Edit';
import UsersList from './pages/entities/Users/List';
import Layout from './components/layout/Layout';
import AdminRegister from './pages/auth/Register';

const PrivateRoute = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return admin ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<AdminRegister />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Rotas para Matérias */}
        <Route
          path="/materias"
          element={
            <PrivateRoute>
              <MateriasList />
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/create"
          element={
            <PrivateRoute>
              <MateriasCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/:id/edit"
          element={
            <PrivateRoute>
              <MateriasEdit />
            </PrivateRoute>
          }
        />

        {/* Rotas para Quizzes */}
        <Route
          path="/quizzes"
          element={
            <PrivateRoute>
              <QuizzesList />
            </PrivateRoute>
          }
        />
        <Route
          path="/quizzes/create"
          element={
            <PrivateRoute>
              <QuizzesCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/quizzes/:id/edit"
          element={
            <PrivateRoute>
              <QuizzesEdit />
            </PrivateRoute>
          }
        />

        {/* Rotas para Questões */}
        <Route
          path="/questoes"
          element={
            <PrivateRoute>
              <QuestoesList />
            </PrivateRoute>
          }
        />
        <Route
          path="/questoes/create"
          element={
            <PrivateRoute>
              <QuestoesCreate />
            </PrivateRoute>
          }
        />
        <Route
          path="/questoes/:id/edit"
          element={
            <PrivateRoute>
              <QuestoesEdit />
            </PrivateRoute>
          }
        />

        {/* Rotas para Usuários */}
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersList />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;