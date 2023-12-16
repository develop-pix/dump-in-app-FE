import React from 'react';
import {
  MyActivityContainer,
  ActivityItemContainer,
  ActivityIcon,
  ActivityIconText,
} from '../../../styles/layout/my-page/MyActivity/MyActivity.style';
import {
  MyActiveProps,
  ActivityComponentItemProps,
} from '../../../interfaces/MyPage.interface';
import MyPictureImage from '../../../assets/image/my-page/my-picture.png';
import ClickMyPictureImage from '../../../assets/image/my-page/click-my-picture.png';
import FavoriteImage from '../../../assets/image/my-page/favorite.png';
import ClickFavoriteImage from '../../../assets/image/reuse/fillfavorite.png';
import LocationImage from '../../../assets/image/reuse/location.png';
import ClickLocationImage from '../../../assets/image/reuse/location_white.png';
import EventImage from '../../../assets/image/reuse/event.png';
import ClickImage from '../../../assets/image/my-page/click-event.png';

export default function MyActive({
  activeComponent,
  setActiveComponent,
}: MyActiveProps) {
  const activityComponentItem: ActivityComponentItemProps[] = [
    {
      key: 'myPicture',
      image: MyPictureImage,
      activeImage: ClickMyPictureImage,
      text: '내 사진',
      component: 'MyReviewList',
    },
    {
      key: 'favorite',
      image: FavoriteImage,
      activeImage: ClickFavoriteImage,
      text: '게시글',
      component: 'MyPostList',
    },
    {
      key: 'location',
      image: LocationImage,
      activeImage: ClickLocationImage,
      text: '지점',
      component: 'MyPhotoBoothList',
    },
    {
      key: 'event',
      image: EventImage,
      activeImage: ClickImage,
      text: '이벤트',
      component: 'MyEventList',
    },
  ];

  const imageMap = {
    MyReviewList: MyPictureImage,
    MyPostList: FavoriteImage,
    MyPhotoBoothList: LocationImage,
    MyEventList: EventImage,
    Login: '',
  };

  const activeImageMap = {
    MyReviewList: ClickMyPictureImage,
    MyPostList: ClickFavoriteImage,
    MyPhotoBoothList: ClickLocationImage,
    MyEventList: ClickImage,
    Login: '',
  };

  return (
    <MyActivityContainer
      pointerEvents={activeComponent === 'Login' ? 'none' : 'auto'}>
      {activityComponentItem.map(item => (
        <ActivityItemContainer
          key={item.key}
          onPress={() => {
            setActiveComponent(item.component);
          }}
          isActive={activeComponent === item.component}>
          <ActivityIcon
            source={
              activeComponent === item.component
                ? activeImageMap[item.component]
                : imageMap[item.component]
            }
            resizeMode="contain"
          />
          <ActivityIconText isActive={activeComponent === item.component}>
            {item.text}
          </ActivityIconText>
        </ActivityItemContainer>
      ))}
    </MyActivityContainer>
  );
}
