import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/context/ThemeContext';
import "./assets/styles/dark-theme.css";
import { SideBarProvider } from './app/context/SideBarContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/panel/'>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <SideBarProvider>
                    <App />
                </SideBarProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </BrowserRouter>
);
