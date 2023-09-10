import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

// 회원가입
const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};
export default RegisterPage;
