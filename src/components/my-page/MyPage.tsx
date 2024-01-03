import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useAppSelector } from '../../hooks/redux/store';
import { ActivityComponentProps } from '../../interfaces/MyPage.interface';
import { ActivityContainer } from '../../styles/layout/my-page/MyPage.style';
import MyPageBar from '../reuse/header/MyPageBar';

import EditUserName from './EditUserName';
import Login from './my-activity/LoginButton';
import MyActive from './my-activity/MyActivity';
import MyEventList from './my-activity/MyEventList';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyPostList from './my-activity/MyPostList';
import MyReviewList from './my-activity/MyReviewList';
import MyPageMenu from './MyPageMenu';

export default function MyPage() {
    const accessToken = useAppSelector(state => state.login.token);
    const isLoggedIn = accessToken !== null;
    const [isMenuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        setActiveComponent(isLoggedIn ? 'MyReviewList' : 'Login');
    }, [isLoggedIn]);

    const [activeComponent, setActiveComponent] = useState<ActivityComponentProps>('Login');

    const activeComponentMap = {
        MyReviewList: <MyReviewList />,
        MyPostList: <MyPostList />,
        MyPhotoBoothList: <MyPhotoBoothList />,
        MyEventList: <MyEventList />,
        Login: <Login />,
    };

    return (
        <ScrollView>
            <ActivityContainer>
                <MyPageBar setMenuVisible={setMenuVisible} />
                <EditUserName />
                <MyActive activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            </ActivityContainer>
            {activeComponentMap[activeComponent]}

            <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
        </ScrollView>
    );
}
