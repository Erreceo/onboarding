import styled from "styled-components";
import backgroundImage from "../assets/mountains-1412683.png";

const Section = styled.section`
  height: 100vh;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Header = styled.div`
  height: 100px;
  color: black;
`;

const Footer = styled.div`
  height: 100px;
`;

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
`;

const View = () => {
  return (
    <Background>
      <LoginForm />
    </Background>
  );
};

const LoginForm = () => (
  <Section className="d-flex align-items-center">
    <div className="container">
      <div className="offset-md-4 col-sm-1 col-md-4">
        <Container className="card">
          <Header className="d-flex justify-content-center align-items-center">
            <p className="h1">Login</p>
          </Header>
          <form>
            <div className="container">
              <div className="row">
                <div className="form-group">
                  <Input
                    type="email"
                    id="user"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <Input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Senha"
                  />
                </div>
              </div>
            </div>
          </form>
          <Footer className="container">
            <div className="row">
              <div className="form-group">
                <button className="btn btn-primary col-12 col-md-4" id="entrar">
                  Entrar
                </button>
              </div>
            </div>
          </Footer>
        </Container>
      </div>
    </div>
  </Section>
);
export default View;
