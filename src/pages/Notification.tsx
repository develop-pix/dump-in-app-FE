import React from 'react';

import NotificationForm from '../components/notification/NotificationForm';
import { NotificationSafeContainer } from '../styles/layout/Notification.style';

export default function Notification() {
    return (
        <NotificationSafeContainer>
            <NotificationForm />
        </NotificationSafeContainer>
    );
}
