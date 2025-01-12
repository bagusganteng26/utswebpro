import FormLogin from "../components/fragments/formlogin";
import AuthLayout from "../components/layout/authLayout";

const HeloPage = () => {
    return (
    <AuthLayout title ="Hello" type="login">
    ini adalah halaman helo <FormLogin/>
    </AuthLayout>
    );
};

export default HeloPage;