import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { PartnerInterface } from "../interfaces";

interface PartnerListParams {
  partners: PartnerInterface[];
}

const PartnerList = (params: PartnerListParams) => {
  const { partners } = params;
  console.log(partners);

  ///DESTRUCTION ON , FIND PARTNERS

  return (
    <>
      {partners &&
        partners?.length > 0 &&
        partners.map((partner) => {
          const { image, id } = partner;
          return (
            <>
              <Link href={`/home/PartnersDetails/${partner.slug}`}>
                <article key={id}>
                  <img src={image} />
                </article>
              </Link>
            </>
          );
        })}
    </>
  );
};

export default PartnerList;
