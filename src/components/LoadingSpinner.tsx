import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-white animate-spin"></div>
        <div className="mt-4 text-white text-center font-display">Loading...</div>
      </div>
    </div>
  );
}