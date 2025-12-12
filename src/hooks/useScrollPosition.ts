import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

export function saveScrollPosition(key: string) {
  sessionStorage.setItem(`scroll-${key}`, window.pageYOffset.toString());
}

export function getScrollPosition(key: string): number {
  const saved = sessionStorage.getItem(`scroll-${key}`);
  return saved ? parseInt(saved, 10) : 0;
}

export function clearScrollPosition(key: string) {
  sessionStorage.removeItem(`scroll-${key}`);
}