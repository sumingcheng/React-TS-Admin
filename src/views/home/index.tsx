import React from 'react';
import '@/assets/home.less';
import {Button} from 'antd';

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
  return (
      <div>
        <h5 className="ss">
          <Button>home</Button>
        </h5>
      </div>
  );
};

export default Home;
