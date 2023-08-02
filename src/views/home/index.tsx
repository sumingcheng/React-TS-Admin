import React from 'react';
import '@/assets/home.less';
import {Button} from 'antd';

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
  return (
      <div>
        <h5 className="ss">
          <Button type="primary">home</Button>
        </h5>
        <h1 className="text-3xl font-bold underline bg-amber-500">tailwind</h1>
      </div>
  );
};

export default Home;
