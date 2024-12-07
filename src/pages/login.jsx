import FormLogin from "../components/fragments/formlogin";
import AuthLayout from "../components/layout/authLayout";

const LoginPage = () => {
    return (
    <AuthLayout title ="Login" type="login">
        <FormLogin/>
    </AuthLayout>
    );
};

export default LoginPage;