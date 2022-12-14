import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './landingPage/landingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
