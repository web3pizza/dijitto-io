'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = '/dijitto-io/main';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      Redirecting...
    </div>
  );
}
