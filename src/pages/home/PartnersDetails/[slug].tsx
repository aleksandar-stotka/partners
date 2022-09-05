import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { PartnerInterface } from "../../../interfaces";
import PartnerService from "../../../services/PartnerService";

const partnerService = PartnerService.getInstance();

const SelectedPartner = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const [partner, setPartner] = useState<PartnerInterface | null>(null);

  useEffect(() => {
    partnerService.getOne(slug).then((partner) => setPartner(partner));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  //////
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ul>
        <li>{partner?.name}</li>
        <li>{partner?.phone}</li>
        <li>{partner?.email}</li>
        <button onClick={openModal}>delete</button>
      </ul>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          are you
          <button className="close-modal-btn" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPartner;
