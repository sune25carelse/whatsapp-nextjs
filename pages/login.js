import Head from "next/head";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png" />
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;
