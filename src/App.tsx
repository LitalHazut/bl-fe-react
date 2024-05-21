import './App.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from './routing/app-routes';

// import React from 'react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container h-full flex flex-col">
        <RouterProvider router={appRouter} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
