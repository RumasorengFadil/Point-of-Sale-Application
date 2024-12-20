import React, { useEffect } from "react";

const LoadingWithScrollDisable = ({ size = "medium", color = "blue-500", overlay = true, isLoading=false }) => {
  const sizes = {
    small: "w-6 h-6 border-2",
    medium: "w-8 h-8 border-4",
    large: "w-12 h-12 border-4",
  };

  // useEffect(() => {
  //   if (overlay) {
  //     // Menonaktifkan scroll saat loading aktif
  //     document.body.style.overflow = "hidden";
  //   }

  //   // Cleanup untuk mengembalikan scroll setelah loading selesai
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [overlay]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isLoading?"":"hidden"} ${overlay ? 'z-50' : ''}`}>
      {overlay && (
        <div
          className="fixed inset-0 bg-gray-700 opacity-50"
          aria-hidden="true"
        ></div>
      )}
      <div
        className={`${sizes[size]} z-50 border-t-transparent border-blue-500 border-solid rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingWithScrollDisable;
