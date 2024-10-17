// components/Loader.tsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-600">
      <div className="loader border-t-8 border-white rounded-full w-20 h-20 animate-spin"></div>
    </div>
  );
}
