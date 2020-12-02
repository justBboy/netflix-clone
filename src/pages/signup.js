import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as ROUTES from '../constants/routes';
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstname, setFirstname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const isInvalid = firstname === '' || password === '' || emailAddress === '';

    const handleSignup = event => {
        event.preventDefault()

        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then(result => {
            result.user.updateProfile({
                displayName: firstname,
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() => {
                history.push(ROUTES.BROWSE)
            })
        })
        .catch(err => {
            setFirstname('')
            setPassword('')
            setEmailAddress('')
            setError(err.message)
        })
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                    placeholder="First name"
                    value={firstname}
                    onChange={({target}) => setFirstname(target.value)}
                    />
                    <Form.Input
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    autoComplete="off"
                    onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>

                    <Form.Text>Already a user, <Form.Link to={ROUTES.SIGNIN}>Sign In Now.</Form.Link></Form.Text>
                    <Form.TextSmall>
                    This page is protect by Google reCAPTCHA to ensure you're not a
              bot. Learn more
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

export default SignUp
