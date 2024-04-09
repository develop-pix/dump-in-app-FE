import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import MenuIcon from 'assets/image/icon/menu.svg';
import { useAppSelector } from 'hooks/redux/store';
import { ActivityComponentProps } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { MyPageContainer } from 'styles/layout/my-page/MyPage.style';
import { HeaderIconContainer, HeaderRightContainer } from 'styles/layout/reuse/header/Header.style';

import MyEventList from './my-activity/MyEventList';
import MyPageLogin from './my-activity/MyPageLogin';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyPostList from './my-activity/MyPostList';
import MyReviewList from './my-activity/MyReviewList';
import MyPageUserData from './MyPageUserData';

export default function MyPage() {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [activeComponent, setActiveComponent] = useState<ActivityComponentProps>('Login');

    const updateActiveComponent = (newComponent: ActivityComponentProps) => {
        setActiveComponent(newComponent);
    };

    const activeComponentMap = {
        MyReviewList: <MyReviewList />,
        MyPostList: <MyPostList />,
        MyPhotoBoothList: <MyPhotoBoothList />,
        MyEventList: <MyEventList />,
        Login: <MyPageLogin />,
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (isLoggedIn) {
                    return (
                        <HeaderRightContainer>
                            <HeaderIconContainer
                                onPress={() => {
                                    navigation.navigate('Menu');
                                }}>
                                <MenuIcon width={18} height={12} />
                            </HeaderIconContainer>
                        </HeaderRightContainer>
                    );
                }
            },
        });
    }, [isLoggedIn, navigation]);

    useEffect(() => {
        isLoggedIn ? setActiveComponent('MyReviewList') : setActiveComponent('Login');
    }, [isLoggedIn]);

    return (
        <MyPageContainer>
            <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
            {activeComponentMap[activeComponent]}
        </MyPageContainer>
    );
}
