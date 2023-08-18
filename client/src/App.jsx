import Home from './routes/Home';
import Customizer from './routes/Customizer';
import ModelCanvas from './components/canvas/ModelCanvas';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main className="relative h-screen w-full overflow-hidden transition-all ease-in">
      <Home />
      <ModelCanvas />
      <Customizer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#fff',
            color: '#374151',
          },
        }}
      />
    </main>
  );
}

export default App;
