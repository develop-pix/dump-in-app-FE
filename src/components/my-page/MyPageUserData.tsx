import React, {useState} from 'react';
import MyPageBar from '../reuse/header/MyPageBar';
import EditUserName from './EditUserName';
import MyActive from './my-activity/MyActivity';
import MyPageMenu from './MyPageMenu';
import {ActivityContainer} from '../../styles/layout/my-page/MyPageUserData.style';
import {MyPageUserDataProps} from '../../interfaces/MyPage.interface';

export default function MyPageUserData({
  activeComponent,
  updateActiveComponent,
}: MyPageUserDataProps) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <ActivityContainer>
        <MyPageBar setMenuVisible={setMenuVisible} />
        <EditUserName />
        <MyActive
          activeComponent={activeComponent}
          updateActiveComponent={updateActiveComponent}
        />
      </ActivityContainer>

      <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
    </>
  );
}
