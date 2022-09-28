/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from "prop-types";
import PartnerList from "../../components/PartnerList";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { PartnerInterface } from "../../interfaces";
import PartnerService from "../../services/PartnerService";
import Form from "../../components/Form/Form";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
const partnerService = PartnerService.getInstance();

//ja zemma istancata
function HomePage() {
  const router = useRouter();

  // make me array with paths to images that are in assets/images-partners/grid/
  const [partners, setPartners] = useState<PartnerInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    partnerService.getList().then((partnerList) => {
      setPartners(partnerList);
    });
    setLoading(false);
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
            {!partners && <Loading />}
            <div className="col-span-2 row-span-2">
              <Form partners={partners} />
            </div>

            <PartnerList partners={partners} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
