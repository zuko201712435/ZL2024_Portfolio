i//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";

//> Images
// Logo of MDB React
import MDBLogo from "../../../assets/mdb-react-small.png";
// Logo of Advertisement Agency Christian Aichner
import AgencyLogo from "../../../assets/agency-small.png";
// Image of someone coding
import Projects from "../../../assets/content/projects.jpg";

//> CSS
import "./HomePage.scss";
//#endregion

//#region > Components
/**
 * @class Template Homepage Component
 * @description Provides a first template to see when you run this app
 */
class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBEdgeHeader color="bg-red" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white py-2 px-2 border"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img
                        src={AgencyLogo}
                        alt="mdbreact-logo"
                        className="pr-2"
                      />
                      +
                      <img
                        src={MDBLogo}
                        alt="mdbreact-logo"
                        className="pr-2 pl-2"
                      />
                      Zuko Luvalo 
 
</br>
portfolio 


                  </strong>
                  </h2>
                  <MDBRow />
                  <p>Contact</p>
                  <p className="pb-4">
                   experience 
                   
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">
                       r
                      </span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
education 
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  experience 2
                </h2>
                <p className="text-center text-muted mb-1">
                  
                  experience 3
                </p>
                <p className="text-center text-muted mb-1">
                  
                  experience 4
                </p>
                <p className="text-center text-muted">
                  
                  experience 5
                </p>
                <hr className="my-5" />
                <MDBRow id="categories" className="justify-content-center">
                  <MDBCol md="4">
                    <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src={Projects}
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="github"
                            brand
                            className="dark-text pr-2"
                          />
                          <strong>GitHub</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Find more of our amazing work and templates on GitHub!
                        </MDBCardText>
                        <a
                          className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                          href="https://github.com/aichner"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          More
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}
//#endregion

//#region > Exports
export default HomePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
