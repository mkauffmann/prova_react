import React from "react";
import Heading from "../components/micro/Heading/Heading";
import Breadcrumb from "../components/micro/Breadcrumb/Breadcrumb";
import Form from "../components/template/Forms/Form";
import FormGroup from "../components/template/Forms/FormGroup";
import FormCheckbox from "../components/template/Forms/FormCheckbox";
import FormButton from "../components/template/Forms/FormButton";
import FormSelect from "../components/template/Forms/FormSelect";

function Forms(props) {
  return (
    <>
      <div className="main-content">
        {/* <!-- content --> */}
        <div className="container-fluid content-top-gap">
          <Breadcrumb currentPage="Forms" />

          {/* <!-- forms --> */}
          <section className="forms">
            {/* <!-- forms 1 --> */}
            <div className="card card_border py-2 mb-4">
              <Heading heading="Forms" />

              <div className="card-body">
                <Form method="post" action="#">
                  <FormGroup
                    id="email"
                    label="Email address"
                    placeholder="Enter email"
                    textHelp="We'll never share your email with anyone else."
                    type="email"
                  />
                  <FormGroup
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                  />
                  <FormCheckbox id="check" label="Check me out" />
                  <FormButton type="submit" label="Submit" />
                </Form>
              </div>
            </div>
            {/* <!-- //forms 1 --> */}

            {/* <!-- forms 2 --> */}
            <div className="card card_border py-2 mb-4">
              <div className="card-body">
                <Form action="#" method="post">
                  <div className="form-row">
                    <FormGroup
                      classes="col-md-6"
                      type="email"
                      label="Email"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                    <FormGroup
                      classes="col-md-6"
                      type="password"
                      label="Password"
                      id="inputPassword14"
                      placeholder="Password"
                    />
                  </div>
                  <FormGroup
                    type="text"
                    label="Address"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                  <FormGroup
                    type="text"
                    label="Address 2"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                  <div className="form-row">
                    <FormGroup
                      classes="col-md-6"
                      type="text"
                      label="City"
                      id="inputCity"
                    />
                    <FormSelect
                      classes="col-md-4"
                      label="State"
                      id="inputState"
                      options={["Choose...", "..."]}
                    />
                    <FormGroup
                      classes="col-md-2"
                      type="text"
                      label="Zip"
                      id="inputZip"
                    />
                  </div>
                  <FormCheckbox id="check" label="Check me out" />
                  <FormButton type="submit" label="Submit" />
                </Form>
              </div>
            </div>
            {/* <!-- //forms 2 --> */}
          </section>
          {/* <!-- //forms --> */}
          {/* <!-- //forms  --> */}
        </div>
        {/* <!-- //content --> */}
      </div>
    </>
  );
}

export default Forms;
