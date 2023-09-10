import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

// 관리자 페이지
const AdminPage = () => {
    return (
        <AuthTemplate>
            <AuthForm />
            <h1>관리자 페이지</h1>
            <br />
            추후 관리 예정
        </AuthTemplate>
    );
};
export default AdminPage;
