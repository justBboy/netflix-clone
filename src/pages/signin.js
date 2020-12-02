import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as ROUTES from '../constants/routes';
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
    .auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
        history.push(ROUTES.BROWSE)
    })
    .catch(err => {
        setEmailAddress('')
        setPassword('')
        setError(err.message)
    })
  };

  const isInvalid = password === "" || emailAddress === "";

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netfix? <Form.Link to="/signup">SignUp</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protect by Google reCAPTCHA to ensure you're not a
              bot. Learn more
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
