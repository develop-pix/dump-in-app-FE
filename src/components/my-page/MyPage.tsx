import React, {useState} from 'react';
import Bar from './Bar';
import EditUserName from './EditUserName';
import MyActive from './my-activity/MyActivity';
import MyReviewList from './my-activity/MyReviewList';
import MyPostList from './my-activity/MyPostList';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyEventList from './my-activity/MyEventList';
import {MyActivityContainer} from '../../styles/layout/my-page/MyPage.style';

export default function MyPage() {
  const [activeComponent, setActiveComponent] = useState<
    'MyReviewList' | 'MyPostList' | 'MyPhotoBoothList' | 'MyEventList'
  >('MyReviewList');
  const activeComponentMap = {
    MyReviewList: <MyReviewList />,
    MyPostList: <MyPostList />,
    MyPhotoBoothList: <MyPhotoBoothList />,
    MyEventList: <MyEventList />,
  };

  return (
    <>
      <MyActivityContainer>
        <Bar />
        <EditUserName />
        <MyActive setActiveComponent={setActiveComponent} />
        {activeComponentMap[activeComponent]}
      </MyActivityContainer>
    </>
  );
}
