import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div id='mainLayout' className='container mx-auto'>
      {children}
    </div>
  );
};

export default MainLayout;
