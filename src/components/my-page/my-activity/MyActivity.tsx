import ClickEventImage from 'assets/image/icon/click_event.svg';
import ClickFavoriteImage from 'assets/image/icon/click_favorite.svg';
import ClickLocationImage from 'assets/image/icon/click_location.svg';
import ClickMyPictureImage from 'assets/image/icon/click_my_picture.svg';
import EventImage from 'assets/image/icon/event.svg';
import FavoriteImage from 'assets/image/icon/favorite.svg';
import LocationImage from 'assets/image/icon/location.svg';
import MyPictureImage from 'assets/image/icon/my_picture.svg';
import { ActivityComponentItemProps, MyActiveProps } from 'interfaces/MyPage.interface';
import {
    ActivityIconText,
    ActivityItemContainer,
    MyActivityContainer,
} from 'styles/layout/my-page/MyActivity/MyActivity.style';

export default function MyActive({ activeComponent, setActiveComponent }: MyActiveProps) {
    const activityComponentItem: ActivityComponentItemProps[] = [
        {
            key: 'myPicture',
            image: <MyPictureImage />,
            activeImage: <ClickMyPictureImage />,
            text: '내 사진',
            component: 'MyReviewList',
        },
        {
            key: 'favorite',
            image: <FavoriteImage />,
            activeImage: <ClickFavoriteImage />,
            text: '게시글',
            component: 'MyPostList',
        },
        {
            key: 'location',
            image: <LocationImage />,
            activeImage: <ClickLocationImage />,
            text: '지점',
            component: 'MyPhotoBoothList',
        },
        {
            key: 'event',
            image: <EventImage />,
            activeImage: <ClickEventImage />,
            text: '이벤트',
            component: 'MyEventList',
        },
    ];

    const imageMap = {
        MyReviewList: <MyPictureImage height={20} />,
        MyPostList: <FavoriteImage height={20} />,
        MyPhotoBoothList: <LocationImage height={20} />,
        MyEventList: <EventImage height={20} />,
        Login: '',
    };

    const activeImageMap = {
        MyReviewList: <ClickMyPictureImage height={20} />,
        MyPostList: <ClickFavoriteImage height={20} />,
        MyPhotoBoothList: <ClickLocationImage height={20} />,
        MyEventList: <ClickEventImage height={20} />,
        Login: '',
    };

    return (
        <MyActivityContainer pointerEvents={activeComponent === 'Login' ? 'none' : 'auto'}>
            {activityComponentItem.map(item => (
                <ActivityItemContainer
                    key={item.key}
                    onPress={() => {
                        setActiveComponent(item.component);
                    }}
                    isActive={activeComponent === item.component}>
                    {activeComponent === item.component ? activeImageMap[item.component] : imageMap[item.component]}
                    <ActivityIconText isActive={activeComponent === item.component}>{item.text}</ActivityIconText>
                </ActivityItemContainer>
            ))}
        </MyActivityContainer>
    );
}
