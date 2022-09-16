import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { PartnerInterface } from "../interfaces";

interface PartnerListParams {
  partners: PartnerInterface[];
}

const PartnerList = (params: PartnerListParams) => {
  const { partners } = params;

  ///DESTRUCTION ON , FIND PARTNERS

  return (
    <>
      {partners &&
        partners?.length > 0 &&
        partners.map((partner) => {
          const { image, id, name, phone } = partner;
          return (
            <>
              <Link href={`/home/PartnersDetails/${partner.slug}`}>
                <article key={id}>
                  <img src={image} />
                  <h1>{name}</h1>
                </article>
              </Link>
            </>
          );
        })}
    </>
  );
};

export default PartnerList;
