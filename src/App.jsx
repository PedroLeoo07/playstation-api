// ...existing code...
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import LoadingScreen from './components/LoadingScreen';

function AppContent() {
  const { isLoading } = useLoading();
  
  return (
    <Router>
      {isLoading && <LoadingScreen />}
      {/* ...existing routes and components... */}
    </Router>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;