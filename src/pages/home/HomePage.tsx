import PropTypes from "prop-types";
import PartnerList from "../../components/PartnerList";
import Form from "../../components/Form";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { PartnerInterface } from "../../interfaces";
import PartnerService from "../../services/PartnerService";

const partnerService = PartnerService.getInstance();
//ja zemma istancata
function HomePage() {
  // make me array with paths to images that are in assets/images-partners/grid/
  const [partners, setPartners] = useState<PartnerInterface[]>([]);
  useEffect(() => {
    partnerService.getList().then((partnerList) => {
      setPartners(partnerList);
    });
  }, []);

  return (
    <div className="bg-black h-auto text-white py-10 mt-10">
      <div className="container m-auto" style={{ padding: "0px 100px" }}>
        <h1
          className="text-3xl text-yellow-300"
          style={{ padding: "0px 20px" }}
        >
          Partners
        </h1>
        {/* make me a grid that is 4 columns wide and 4 rows tall, while the first 2 columns and rows are filled with div form */}
        <div className="inner container">
          <div className="grid grid-cols-4 grid-rows-4 gap-7">
            <div className="col-span-2 row-span-2">
              <Form />
            </div>

            <PartnerList partners={partners} />
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
