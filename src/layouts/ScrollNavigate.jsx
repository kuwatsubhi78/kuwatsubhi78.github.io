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

      const index = routes.indexOf(pathname);
      let nextIndex;

      if (e.deltaY > 0) {
        // Scroll ke bawah
        // Cek apakah sudah sampai bawah halaman
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition < pageHeight) {
          // Belum sampai bawah, tidak pindah halaman
          return;
        }

        nextIndex = (index + 1) % routes.length;
      } else {
        // Scroll ke atas, langsung pindah halaman
        nextIndex = (index - 1 + routes.length) % routes.length;
      }

      lock = true;
      navigate(routes[nextIndex]);

      setTimeout(() => {
        lock = false;
      }, 1000); // delay scroll 1 detik untuk mencegah pindah berulang
    };

    window.addEventListener('wheel', onScroll);
    return () => window.removeEventListener('wheel', onScroll);
  }, [pathname, navigate]);
}
