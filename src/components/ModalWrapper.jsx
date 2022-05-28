import React from "react";

export const ModalWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen	">
      {children}
    </div>
  );
};

// bg-neutral-100
