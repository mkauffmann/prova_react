import React from "react";
import {
  faLaptop,
  faPaintBrush,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

import Heading from "../components/micro/Heading/Heading";
import Breadcrumb from "../components/micro/Breadcrumb/Breadcrumb";
import ContentCard1 from "../components/macro/ContentCard1/ContentCard1";
import ContentCard2 from "../components/macro/ContentCard2/ContentCard2";
import ContentCard3 from "../components/macro/ContentCard3/ContentCard3";
import SmallContentCard1 from "../components/macro/SmallContentCard1/SmallContentCard1";

import template2 from "../assets/images/template2.jpg";
import template1 from "../assets/images/template1.jpg";


function Blocks(props) {
  return (
    <>
      {/* <!-- main content start --> */}
      <div className="main-content">
        {/* <!-- content --> */}
        <div className="container-fluid content-top-gap">
          <Breadcrumb prevPage="Elements" currentPage="Content Blocks" />

          <Heading heading="Content Blocks" />

          {/* <!-- content block style 1--> */}
          <ContentCard1
            title="About Content Block"
            paragraph1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                        neque sunt labore veritatis."
            paragraph2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                        neque sunt
                        praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                        praesentium vel voluptatum quasi dolor explicabo nobis ex?"
            btn="Read More"
            img={template2}
          />

          {/* <!-- //content block style 1--> */}

          {/* <!-- content block style 2--> */}
          <ContentCard2
            img={template1}
            title="Content Block with 2 buttons"
            paragraph1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                        sunt
                        praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                        praesentium vel voluptatum quasi dolor explicabo nobis ex?"
            paragraph2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                        neque sunt labore veritatis."
            btn1="Read More"
            btn2="Contact Us"
          />
          {/* <!-- //content block style 2--> */}

          {/* <!-- content block style 6 --> */}
          <div className="card card_border p-lg-5 p-3 mb-4">
            <div className="card-body py-3 p-0">
              <h3 className="block__title mb-lg-4">Content Block Features</h3>
              <div className="row feature-3 text-center">
                <div className="col-md-4 three-grids-columns mt-5">
                  <SmallContentCard1
                    title="Web Design"
                    text="Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                                    aperiam sequi optio consectetur."
                    link="Read More"
                    icon={faLaptop}
                  />
                </div>
                <div className="col-md-4 three-grids-columns mt-5">
                  <SmallContentCard1
                    title="Graphic Design"
                    text="Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                                    aperiam sequi optio consectetur."
                    link="Read More"
                    icon={faPaintBrush}
                  />
                </div>
                <div className="col-md-4 three-grids-columns mt-5">
                  <SmallContentCard1
                    title="Web Development"
                    text="Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                                    aperiam sequi optio consectetur."
                    link="Read More"
                    icon={faSignal}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- //content block style 6 --> */}

          {/* <!-- content block style 7 --> */}
          <div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
            <div className="card-body py-3 p-0">
              <h3 className="block__title mb-lg-4">
                Content Block Features with photo
              </h3>
              <ContentCard3
                img={template2}
                smCardsTitles={[
                  "Web design",
                  "Graphic design",
                  "Web development",
                  "Webdesign",
                ]}
                smCardsTexts={[
                  "Type your text here... Lorem ipsum dolor sit amet.",
                  "Type your text here... Lorem ipsum dolor sit amet.",
                  "Type your text here... Lorem ipsum dolor sit amet.",
                  "Type your text here... Lorem ipsum dolor sit amet.",
                ]}
                smCardsIcons={[faLaptop, faPaintBrush, faSignal, faLaptop]}
              />
            </div>
          </div>
          {/* <!-- //content block style 7 --> */}
        </div>
        {/* <!-- //content --> */}
      </div>
      {/* <!-- main content end--> */}
    </>
  );
}

export default Blocks;
