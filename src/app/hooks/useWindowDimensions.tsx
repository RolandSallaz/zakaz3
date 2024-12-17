'use client'
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') return { width: 0, height: 0 }; // Проверка на сервер
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Устанавливаем начальные значения на клиенте

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
