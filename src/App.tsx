import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from '@/lib/store';
import { AuthPage } from '@/pages/Auth';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
}

export default App;