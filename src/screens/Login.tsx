import LoginForm from 'components/login/LoginForm';
import { LoginSafeContainer } from 'styles/layout/login/Login.style';

export default function Login() {
    return (
        <LoginSafeContainer>
            <LoginForm />
        </LoginSafeContainer>
    );
}
