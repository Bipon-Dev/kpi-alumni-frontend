import { useEffect, useState } from "react";
import { Alert, Form, Label, Button } from "reactstrap";

// Social Media Imports
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// router
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// config
import config from "../../config";

// hooks
import { useProfile, useRedux } from "../../hooks/index";
import { createSelector } from "reselect";
// actions
import { loginUser, socialLogin } from "../../redux/actions";

// components
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper";
import AuthHeader from "../../components/AuthHeader";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

type LoginProps = [];

const YourComponent = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login Success:", tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <button
      type="button"
      className="btn btn-light w-full"
      onClick={() => login()}
    >
      <i className="mdi mdi-google text-red-500"></i> Sign in with Google
    </button>
  );
};

const Login = (props: LoginProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const errorData = createSelector(
    (state: any) => state.Login,
    (state) => ({
      isUserLogin: state.isUserLogin,
      error: state.error,
      loginLoading: state.loading,
      isUserLogout: state.isUserLogout,
    })
  );

  const { isUserLogin, error, loginLoading, isUserLogout } =
    useAppSelector(errorData);

  const navigate = useNavigate();
  const location = useLocation();
  const [redirectUrl, setRedirectUrl] = useState("/");
  useEffect(() => {
    const url =
      location.state && location.state.from
        ? location.state.from.pathname
        : "/";
    setRedirectUrl(url);
  }, [location]);
  useEffect(() => {
    if (isUserLogin && !loginLoading && !isUserLogout) {
      navigate(redirectUrl);
    }
  }, [isUserLogin, navigate, loginLoading, isUserLogout, redirectUrl]);

  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please Enter E-mail."),
      password: yup.string().required("Please Enter Password."),
    })
  );

  const defaultValues: any = {
    email: "admin@themesbrand.com",
    password: "123456",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const onSubmitForm = async (values: object) => {
    dispatch(loginUser(values));
  };

  const { userProfile, loading } = useProfile();

  if (userProfile && !loading) {
    return <Navigate to={{ pathname: redirectUrl }} />;
  }

  const signIn = (res: any, type: "google" | "facebook") => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        token: res.accessToken,
      };
      dispatch(socialLogin(postData, type));
    }
  };

  const facebookResponse = (response: object) => {
    signIn(response, "facebook");
  };

  return (
    <NonAuthLayoutWrapper>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <AuthHeader
            title="Welcome Back !"
            subtitle="Sign in to continue to Doot."
          />

          {error && (
            <Alert color="danger" className="mt-4">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit(onSubmitForm)} className="relative mt-6">
            {loginLoading && <Loader />}
            <div className="mb-4">
              <FormInput
                label="Username"
                type="text"
                name="email"
                register={register}
                errors={errors}
                control={control}
                labelClassName="block text-sm font-medium text-gray-700"
                placeholder="Enter username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <FormInput
                label="Password"
                type="password"
                name="password"
                register={register}
                errors={errors}
                control={control}
                labelClassName="block text-sm font-medium text-gray-700"
                placeholder="Enter Password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                type="checkbox"
                id="remember-check"
              />
              <Label
                className="ml-2 block text-sm text-gray-900"
                htmlFor="remember-check"
              >
                Remember me
              </Label>
            </div>

            <div className="text-center mt-6">
              <Button
                color="primary"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
                type="submit"
              >
                Log In
              </Button>
            </div>

            <div className="mt-6 text-center">
              <div className="signin-other-title">
                <h5 className="text-sm font-medium text-gray-500 mb-4">
                  Sign in with
                </h5>
              </div>
              <div className="flex justify-center space-x-4">
                <FacebookLogin
                  appId={config.FACEBOOK.APP_ID}
                  autoLoad={false}
                  callback={facebookResponse}
                  render={(renderProps: any) => (
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 text-indigo-600 p-2 rounded-full"
                      onClick={renderProps.onClick}
                    >
                      <i className="mdi mdi-facebook"></i>
                    </button>
                  )}
                />
                <GoogleOAuthProvider clientId={config.GOOGLE.CLIENT_ID ?? ""}>
                  <YourComponent />
                </GoogleOAuthProvider>
              </div>
            </div>
          </Form>

          <div className="mt-6 text-center text-gray-500">
            <p>
              Don't have an account?{" "}
              <Link
                to="/auth-register"
                className="text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </NonAuthLayoutWrapper>
  );
};

export default Login;
