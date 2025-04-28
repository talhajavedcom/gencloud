'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return null;
};

export default AOSWrapper;
