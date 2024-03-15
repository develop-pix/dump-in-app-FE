import NotificationForm from 'components/notification/NotificationForm';
import { NotificationSafeContainer } from 'styles/layout/notification/Notification.style';

export default function Notification() {
    return (
        <NotificationSafeContainer>
            <NotificationForm />
        </NotificationSafeContainer>
    );
}
