import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

// 로그인 페이지
const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};
export default LoginPage;
