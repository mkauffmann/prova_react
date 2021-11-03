import React from "react";

import Breadcrumb from '../components/micro/Breadcrumb/Breadcrumb'
import Heading from "../components/micro/Heading/Heading";
import PriceCard from "../components/macro/PriceCard/PriceCard";

function Pricing(props){
    return (
        <>
        {/* <!-- main content start --> */}
    <div className="main-content">
      {/* <!-- content --> */}
      <div className="container-fluid content-top-gap">

        <Breadcrumb currentPage="Pricing Tables"/>

       

        {/* <!-- pricing --> */}
        <section className="pricing">
          <div className="card card_border mb-5">
              <Heading heading="Pricing Tables -" subHeading="Version 1"/>
            <div className="card-body">
              {/* <!-- pricing version 1 --> */}

              {/* <!--//BLOCK ROW END--> */}

              <section className="w3l-pricing1">
                <div className="row px-2">
                  <div className="col-md-4 px-2">
                      <PriceCard plan="Free"
                                value="0"
                                time="month"
                                description="There are many variations of passages of Lorem Ipsum available."
                                items={["1 Domain", "10 users included", "2 GB of storage", "Email support", "Help center access"]}
                                cta="Sign up for
                                free"
                                />
                  </div>
                  <div className="col-md-4 px-2">
                  <PriceCard    classes="recomemded-price" popular
                                plan="Regular"
                                value="49"
                                time="month"
                                description="There are many variations of passages of Lorem Ipsum available."
                                items={["10 Domain", "20 users included", "10 GB of storage", "Priority email support", "Help center access"]}
                                cta="Get started"
                                />
                  </div>
                  <div className="col-md-4 px-2">
                  <PriceCard plan="Premium"
                                value="199"
                                time="month"
                                description="There are many variations of passages of Lorem Ipsum available."
                                items={["30 Domain", "30 users included", "15 GB of storage", "Phone and email support", "Help center access"]}
                                cta="Contact us"
                                />
                  </div>
                </div>
                </section>
            </div>
          </div>
        </section>



        {/* <!--BLOCK ROW START--> */}

        {/* <!-- //pricing version 1 --> */}

        {/* <!-- pricing version 2 --> */}
        <div className="pricing-version-2">
          <div className="card card_border mb-5">
          <Heading heading="Pricing Tables -" subHeading="Version 2"/>
            <div className="card-body">
              <div className="row px-2">

                {/* <!-- Table #1  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Basic Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">1 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Limited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Table #2  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Regular Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">10 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Unlimited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Table #3  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Premium Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">15 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Unlimited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <!-- //pricing version 2 --> */}

  {/* <!-- //pricing --> */}

  </div>
  {/* <!-- //content --> */}

  </div>
  {/* <!-- main content end--> */}
  </>
    )
}

export default Pricing