import MyPageForm from 'components/my-page/MyPageForm';
import { MyPageSafeContainer } from 'styles/layout/my-page/MyPage.style';

export default function MyPage() {
    return (
        <MyPageSafeContainer>
            <MyPageForm />
        </MyPageSafeContainer>
    );
}
