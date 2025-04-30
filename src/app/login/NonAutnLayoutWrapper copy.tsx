import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// images
import authImage from "../assets/images/auth-img.png";

interface NonAuthLayoutWrapperProps {
  children: any;
}

const NonAuthLayoutWrapper = (props: NonAuthLayoutWrapperProps) => {
  return (
    <>
      <div className="bg-gray-800">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} className="d-flex flex-column">
              <div className="p-4 pb-0 lg:p-5 lg:pb-0">
                <div className="text-gray-400">
                  <h3>
                    <Link
                      to="/"
                      className="text-white d-flex align-items-center gap-2"
                    >
                      <i className="bx bxs-message-alt-detail text-white fs-2"></i>
                      <span>Doot</span>
                    </Link>
                  </h3>
                  <p className="fs-5">Responsive Bootstrap 5 Chat App</p>
                </div>
                <div className="mt-auto">
                  <img src={authImage} alt="auth" className="img-fluid" />
                </div>
              </div>
            </Col>

            <Col xl={8} lg={8}>
              <div className="authentication-page-content">
                <div className="d-flex flex-column h-100 px-4 pt-4">
                  {props.children}

                  <Row>
                    <Col xl={12}>
                      <div className="text-center text-muted p-4">
                        <p className="mb-0">
                          &copy; {new Date().getFullYear()} Doot. Crafted with{" "}
                          <i className="mdi mdi-heart text-danger"></i> by
                          Themesbrand
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NonAuthLayoutWrapper;
