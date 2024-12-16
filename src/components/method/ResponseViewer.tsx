import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ApiResponse } from '../../types/telegram';

SyntaxHighlighter.registerLanguage('json', json);

interface ResponseViewerProps {
  response: ApiResponse | null;
  error: string | null;
}

export default function ResponseViewer({ response, error }: ResponseViewerProps) {
  if (!response && !error) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-2">Response</h3>
      <div className={`rounded-md ${error ? 'bg-red-50' : 'bg-gray-50'} p-4`}>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <SyntaxHighlighter language="json" style={docco}>
            {JSON.stringify(response, null, 2)}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
}