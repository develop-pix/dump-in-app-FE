import { useState } from 'react';

import MyPageBar from 'components/reuse/header/MyPageBar';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { ActivityContainer } from 'styles/layout/my-page/MyPageUserData.style';

import EditUserName from './EditUserName';
import MyActive from './my-activity/MyActivity';
import MyPageMenu from './MyPageMenu';

export default function MyPageUserData({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <ActivityContainer>
                <MyPageBar setMenuVisible={setMenuVisible} />
                <EditUserName />
                <MyActive activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
            </ActivityContainer>

            <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
        </>
    );
}
