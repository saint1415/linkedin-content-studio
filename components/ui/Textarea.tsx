
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-blue focus:border-brand-blue transition"
        rows={6}
        {...props}
      ></textarea>
    </div>
  );
};
