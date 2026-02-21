import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Only retry once if the AI service is busy
      refetchOnWindowFocus: false, // Don't refetch chat history when switching tabs
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/vertical-living-static">
        <App />
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
)
