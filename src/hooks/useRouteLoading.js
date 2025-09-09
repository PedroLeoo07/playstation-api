import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';

export const useRouteLoading = () => {
  const location = useLocation();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simula tempo de carregamento

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [location.pathname, setLoading]);
};
