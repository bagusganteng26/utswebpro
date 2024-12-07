import Button from "../elements/buttons";
import InputForm from "../elements/input";

const FormLogin = () => {
 return (
    <form action="">
     <InputForm
        label ="Email"
        type ="email"
        placeholder ="example@gmail.com"
        name ="email"
     />
     <InputForm
        label ="Password"
        type ="password"
        placeholder ="*****"
        name ="p    assword"
     />
     <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
    );
};

export default FormLogin;