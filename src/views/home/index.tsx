import React from 'react';
import '@/assets/home.less';

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
  return (
      <div>
        <h5 className="ss">Welcome to Home</h5>
      </div>
  );
};

export default Home;
