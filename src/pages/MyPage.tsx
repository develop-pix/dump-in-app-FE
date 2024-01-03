import MyPageForm from '../components/my-page/MyPageForm';
import { MyPageSafeContainer } from '../styles/layout/MyPage';

export default function MyPage() {
    return (
        <MyPageSafeContainer>
            <MyPageForm />
        </MyPageSafeContainer>
    );
}
