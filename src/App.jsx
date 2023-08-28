import AuthProvider from '@/contexts/Auth';
import ThemeProvider from '@/contexts/Theme';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <div className="App">
              <RouterProvider router={router} />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
