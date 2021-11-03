import React from "react";
import Breadcrumb from "../components/micro/Breadcrumb/Breadcrumb";
import Heading from "../components/micro/Heading/Heading";
import ImgCard from "../components/macro/ImgCard/ImgCard";

import cart from "../assets/images/cart.jpg";
import template2 from "../assets/images/template2.jpg";
import dashboard from "../assets/images/dashboard.jpg";
import desk from "../assets/images/desk.jpg";

function Cards(props) {
  return (
    <>
      {/* // <!-- main content start --> */}
      <div className="main-content">
        {/* <!-- content --> */}
        <div className="container-fluid content-top-gap">
          <Breadcrumb currentPage="Cards" prevPage="Elements" />

          {/* <!-- cards --> */}
          <section className="template-cards">
            {/* <!-- Card Columns --> */}
            <div className="card card_border mb-5">
              <Heading heading="Card Columns" />
              <div className="card-body">
                <div className="card-columns">
                  <ImgCard
                    title="Card title that wraps to a new line"
                    text="This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer."
                    img={cart}
                  />

                  <ImgCard
                    blockquote
                    classes="p-3"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                        ante."
                    source="Someone famous in"
                    sourceTitle="Source Title"
                  />

                  <ImgCard
                    img={template2}
                    title="Card title"
                    text="This card has supporting text below as a natural lead-in to additional
                        content."
                    support="Last updated 3 mins ago"
                  />

                  <ImgCard
                    blockquote
                    classes="p-3 bg-primary text-white text-center"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                        ante."
                    source="Someone famous in"
                    sourceTitle="Source Title"
                    textWhite
                  />
                  <ImgCard
                    classes="text-center"
                    title="Card title"
                    text="This card has a regular title and short paragraphy of text below it."
                    support="Last updated 3 mins ago"
                  />

                  <ImgCard img={dashboard} />
                  <ImgCard
                    blockquote
                    classes="p-3 text-right"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer posuere erat a ante."
                    source="Someone famous in"
                    sourceTitle="Source Title"
                  />
                  <ImgCard
                    title="Card title"
                    text="This is another card with title and supporting text below. This card has
                        some
                        additional content to make it slightly taller overall."
                    support="Last updated 3 mins ago"
                  />
                </div>
              </div>
            </div>
            {/* <!-- /Card Columns --> */}

            {/* <!-- Grid Columns --> */}
            <div className="card card_border mb-5">
              <Heading heading="Grid Columns" />
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="col mb-4">
                    <ImgCard
                      img={template2}
                      title="Card Title"
                      text="This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is
                                a little bit longer."
                    />
                  </div>
                  <div className="col mb-4">
                    <ImgCard
                      img={desk}
                      title="Card Title"
                      text="This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is
                                a little bit longer."
                    />
                  </div>
                  <div className="col mb-4">
                    <ImgCard
                      img={cart}
                      title="Card Title"
                      text="This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is
                                a little bit longer."
                    />
                  </div>
                  <div className="col mb-4">
                    <ImgCard
                      img={dashboard}
                      title="Card Title"
                      text="This is a longer card with supporting text below as a
                                natural lead-in to additional content. This content is
                                a little bit longer."
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Grid Columns --> */}
          </section>
          {/* <!-- //cards --> */}
        </div>
        {/* <!-- //content --> */}
      </div>
      {/* <!-- main content end--> */}
    </>
  );
}

export default Cards;
