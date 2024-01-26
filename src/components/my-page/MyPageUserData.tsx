import { useState } from 'react';

import MyPageBar from 'components/reuse/header/MyPageBar';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { ActivityContainer } from 'styles/layout/my-page/MyPageUserData.style';

import EditUserName from './EditUserName';
import MyActivity from './my-activity/MyActivity';
import MyPageMenu from './MyPageMenu';

export default function MyPageUserData({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <ActivityContainer>
            <EditUserName />
            <MyActivity activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
        </ActivityContainer>
    );
}
