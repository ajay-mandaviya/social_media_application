import React from "react";

export const Input = ({
  lable,
  type,
  value,
  placeholder,
  name,
  onChange,
  Inputerror,
  handleOnFocus,
}) => {
  return (
    <div className="flex flex-col my-4">
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {lable}
        </span>
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={handleOnFocus}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
        />
      </label>

      {Inputerror && <span className="my-1 text-red-400">{Inputerror}</span>}
    </div>
  );
};
