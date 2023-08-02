import React from 'react';
import '@/assets/home.less';
import {Button} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {toggleTheme} from "@/store/themeSlice";


const Home: React.FC = () => {
  const theme = useSelector((state: RootStateType) => state.theme);
  const dispatch = useDispatch();

  return (
      <div>
        <h5 className="ss">
          <Button onClick={() => dispatch(toggleTheme())}>切换主题</Button>
        </h5>
        <h1 className="text-3xl font-bold underline bg-amber-500">{theme}</h1>
      </div>
  );
};

export default Home;
