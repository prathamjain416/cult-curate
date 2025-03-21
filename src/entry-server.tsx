import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { LoadingSpinner } from './components/LoadingSpinner';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <LoadingSpinner />
  );
}