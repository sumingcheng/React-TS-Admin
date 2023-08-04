import React from 'react';
import '@/assets/home.less';
import {Button} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {toggleTheme} from "@/store/themeSlice";
import {getData} from '@/api';


const Home: React.FC = () => {
  const theme = useSelector((state: RootStateType) => state.theme);
  const dispatch = useDispatch();

  const getTheme = () => {
    getData().then(res => {
      console.log(res)
    })
  }

  return (
      <div>
        <h5 className="ss">
          <Button onClick={() => dispatch(toggleTheme())}>切换主题</Button>
          <Button type={'primary'} onClick={() => getTheme()}>请求</Button>
        </h5>
        <h1 className="text-3xl font-bold underline bg-amber-500">{theme}</h1>
      </div>
  );
};

export default Home;
