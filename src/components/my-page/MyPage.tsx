import React, {useState, useEffect} from 'react';
import MyPageBar from '../reuse/header/MyPageBar';
import EditUserName from './EditUserName';
import MyActive from './my-activity/MyActivity';
import MyReviewList from './my-activity/MyReviewList';
import MyPostList from './my-activity/MyPostList';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyEventList from './my-activity/MyEventList';
import Login from './my-activity/LoginButton';
import {ActivityContainer} from '../../styles/layout/my-page/MyPage.style';
import {useAppSelector} from '../../hooks/redux/store';
import {ActivityComponentProps} from '../../interfaces/MyPage.interface';
import MyPageMenu from './MyPageMenu';
import {ScrollView} from 'react-native';

export default function MyPage() {
  const accessToken = useAppSelector(state => state.login.token);
  const isLoggedIn = accessToken !== null;
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setActiveComponent(isLoggedIn ? 'MyReviewList' : 'Login');
  }, [isLoggedIn]);

  const [activeComponent, setActiveComponent] =
    useState<ActivityComponentProps>('Login');

  const activeComponentMap = {
    MyReviewList: <MyReviewList />,
    MyPostList: <MyPostList />,
    MyPhotoBoothList: <MyPhotoBoothList />,
    MyEventList: <MyEventList />,
    Login: <Login />,
  };

  return (
    <>
      <ActivityContainer>
        <MyPageBar setMenuVisible={setMenuVisible} />
        <EditUserName />
        <MyActive
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </ActivityContainer>
      {activeComponentMap[activeComponent]}

      <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
    </>
  );
}
