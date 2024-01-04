import React, {useState, useEffect} from 'react';
import MyReviewList from './my-activity/MyReviewList';
import MyPostList from './my-activity/MyPostList';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyEventList from './my-activity/MyEventList';
import MyPageLogin from './my-activity/MyPageLogin';
import {useAppSelector} from '../../hooks/redux/store';
import {ActivityComponentProps} from '../../interfaces/MyPage.interface';
import MyPageMenu from './MyPageMenu';

export default function MyPage() {
  const accessToken = useAppSelector(state => state.login.token);
  const isLoggedIn = accessToken !== null;
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setActiveComponent(isLoggedIn ? 'MyReviewList' : 'Login');
  }, [isLoggedIn]);

  const [activeComponent, setActiveComponent] =
    useState<ActivityComponentProps>('Login');

  const updateActiveComponent = (newComponent: ActivityComponentProps) => {
    setActiveComponent(newComponent);
  };

  const activeComponentMap = {
    MyReviewList: (
      <MyReviewList
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    ),
    MyPostList: (
      <MyPostList
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    ),
    MyPhotoBoothList: (
      <MyPhotoBoothList
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    ),
    MyEventList: (
      <MyEventList
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    ),
    Login: (
      <MyPageLogin
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    ),
  };

  return (
    <>
      {activeComponentMap[activeComponent]}
      <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
    </>
  );
}
