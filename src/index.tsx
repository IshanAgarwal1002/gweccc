import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from './Components/Pages';
import './index.scss';

const appInit = () => {
  const root = document.getElementById('gweccc');

  createRoot(root as HTMLElement).render(
    <Suspense fallback={<p>Loading...</p>}>
      <LandingPage />
    </Suspense>
  );
};

appInit();
