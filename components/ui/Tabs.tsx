
import React, { useState, createContext, useContext, ReactElement } from 'react';

interface TabsContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  children: ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="w-full">
        <div className="flex space-x-1 sm:space-x-2 border-b border-gray-700 mb-6 justify-center">
          {React.Children.map(children, (child, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base border-b-2 transition-colors duration-200 ease-in-out focus:outline-none ${
                  isActive
                    ? 'border-brand-blue text-white'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                }`}
              >
                {child.props.label}
              </button>
            );
          })}
        </div>
        <div>
          {React.Children.toArray(children)[activeIndex]}
        </div>
      </div>
    </TabsContext.Provider>
  );
};

interface TabProps {
  label: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};
