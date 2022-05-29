import React from "react";

export const ModalWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center z-50   bg-red-200  h-screen w-screen">
      {children}
    </div>
  );
};

// bg-neutral-100
