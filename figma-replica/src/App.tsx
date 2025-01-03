import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainInterfacePage from './pages/MainInterfacePage';
import PrivateRoute from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute element={<MainInterfacePage />} />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
