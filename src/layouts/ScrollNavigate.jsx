import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const routes = ['/', '/projects', '/contacts'];

export default function useScrollNavigate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let lock = false;

    const onScroll = (e) => {
      if (lock) return;
      lock = true;

      const index = routes.indexOf(pathname);
      let nextIndex;

      if (e.deltaY > 0) {
        // Scroll ke bawah
        nextIndex = (index + 1) % routes.length;
      } else {
        // Scroll ke atas
        nextIndex = (index - 1 + routes.length) % routes.length;
      }

      navigate(routes[nextIndex]);

      setTimeout(() => (lock = false), 1000); // delay scroll 1 detik
    };

    window.addEventListener('wheel', onScroll);
    return () => window.removeEventListener('wheel', onScroll);
  }, [pathname, navigate]);
}
