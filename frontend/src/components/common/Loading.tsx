import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-600"></div>
    </div>
  );
}

export default Loading;