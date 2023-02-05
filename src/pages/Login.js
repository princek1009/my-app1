import {
  StyledTextInput, StyledFormArea,
  ButtonGroup, StyledFormButton, StyledLabel1, Avatar,
  StyledTitle, colors, ExtraText,
  TextLink, CopyrightText
} from './../components/Styles'

import Logo from './../assets/R.png';

//formik
import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';

import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';

import Loader from 'react-loader-spinner';

const Login = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}> Member Login
        </StyledTitle>
        <Formik 
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={
          Yup.object({
            email: Yup.string().email("Invalid email address")
            .required("Required"),
            password: Yup.string().min(8, "Password is too short")
            .max(30, "Password is too long")
            .required("Required")
          })
        }
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
        }}
        >
          {({isSubmitting}) => (
            <Form>
              <TextInput name="email"
                type="text"
                label="Email Address"
                placeholder="test@example.com"
                icon ={<FiMail />} />
              <TextInput name="password"
                type="password"
                label="Password"
                placeholder="########"
                icon ={<FiLock />} />
                <ButtonGroup>
                  <StyledFormButton type="submit">Login</StyledFormButton>
                  
                </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup </TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>
        All rights reserverd &copy;2023
      </CopyrightText>
    </div>
  )
};
export default Login;

