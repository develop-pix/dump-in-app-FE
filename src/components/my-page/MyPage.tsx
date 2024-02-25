import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import MenuIcon from 'assets/image/icon/menu.svg';
import { useAppSelector } from 'hooks/redux/store';
import { ActivityComponentProps } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { HeaderIconContainer, HeaderRightContainer } from 'styles/layout/reuse/header/Header.style';

import MyEventList from './my-activity/MyEventList';
import MyPageLogin from './my-activity/MyPageLogin';
import MyPhotoBoothList from './my-activity/MyPhotoBoothList';
import MyPostList from './my-activity/MyPostList';
import MyReviewList from './my-activity/MyReviewList';

export default function MyPage() {
    const accessToken = useAppSelector(state => state.token.accessToken);
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();

    const isLoggedIn = accessToken !== null;
    const [activeComponent, setActiveComponent] = useState<ActivityComponentProps>(
        isLoggedIn ? 'MyReviewList' : 'Login',
    );

    if (isLoggedIn && activeComponent !== 'MyReviewList') {
        setActiveComponent('MyReviewList');
    } else if (!isLoggedIn && activeComponent !== 'Login') {
        setActiveComponent('Login');
    }

    const updateActiveComponent = (newComponent: ActivityComponentProps) => {
        setActiveComponent(newComponent);
    };

    const activeComponentMap = {
        MyReviewList: <MyReviewList activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />,
        MyPostList: <MyPostList activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />,
        MyPhotoBoothList: (
            <MyPhotoBoothList activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
        ),
        MyEventList: <MyEventList activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />,
        Login: <MyPageLogin activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />,
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

    return <>{activeComponentMap[activeComponent]}</>;
}
