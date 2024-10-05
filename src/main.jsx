
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App.jsx';
import { AuthProvider } from './AuthContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <App />
</AuthProvider>,
);
