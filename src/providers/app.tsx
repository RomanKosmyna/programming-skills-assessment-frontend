import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from '../lib/react-query';
import { ChakraProvider } from '@chakra-ui/react';

type AppProviderProps = {
    children: React.ReactNode;
};

const ErrorFallback = () => {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
            <button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </button>
        </div>
    );
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div>
                    <p>Suspense</p>
                </div>
            }
        >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HelmetProvider>
                    <QueryClientProvider client={queryClient}>
                        <ChakraProvider>
                            {children}
                        </ChakraProvider>
                    </QueryClientProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </React.Suspense>
    )
};