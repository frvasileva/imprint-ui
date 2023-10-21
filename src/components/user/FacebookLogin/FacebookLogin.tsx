import { FacebookProvider, LoginButton } from "react-facebook";

export const FacebookLogin = (props: any) => {

    const handleResponse = (response: any) => {
        console.log(response);
    };

    const handleError = (error: any) => {
        //	this.setState({ error });
        console.log(error);
    };

    return (
        <FacebookProvider appId="259177898749113">
            <LoginButton
                scope="email"
                // onCompleted={handleResponse}
                onError={handleError}
                // className="btn btn-lg btn-block facebook-button"
            >
                <span>
                    <i className="fab fa-facebook"></i>Facebook Login
                </span>
            </LoginButton>
        </FacebookProvider>
    );
};