import React, {useState} from 'react';
import {
  Container,
  ItemContainer,
  Icon,
  Text,
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

export default function MyActive({setActiveComponent}: MyActiveProps) {
  const [activeItem, setActiveItem] = useState('myPicture');

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

  return (
    <Container>
      {activityComponentItem.map(item => (
        <ItemContainer
          key={item.key}
          onPress={() => {
            setActiveItem(item.key);
            setActiveComponent(item.component);
          }}>
          {/* <Icon
            source={activeItem === item.key ? item.activeImage : item.image}
          /> */}
          <Text isActive={activeItem === item.key}>{item.text}</Text>
        </ItemContainer>
      ))}
    </Container>
  );
}
