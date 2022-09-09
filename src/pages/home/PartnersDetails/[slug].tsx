import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { PartnerInterface } from "../../../interfaces";
import PartnerService from "../../../services/PartnerService";
import handler from "../../api/partners/[slug]";

const partnerService = PartnerService.getInstance();

const SelectedPartner = () => {
  const router = useRouter();
  //localhost:3000
  const slug = router.query.slug as string;

  const [partner, setPartner] = useState<PartnerInterface | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [removeParner, setRemovePartner] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    partnerService.getOne(slug).then((partner) => setPartner(partner));
  }, []);

  const removeParners = (slug: string) => {
    partnerService.deleteOne(slug).then((partner) => setPartner(partner));
  };

  //////
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center  w-full   bg-black ">
      <div className="inner w-4/5 flex justify-center gap-8   ">
        <div className="form-group w-2/5">
          <img src={partner?.image} alt={partner?.image} />

          <div className="button-group flex justify-center ">
            {!showForm && (
              <button
                className=" border border-yellow-300 text-white w-40 m-3 rounded-xl	"
                onClick={() => setShowForm(true)}
              >
                edit
              </button>
            )}
            <button
              className=" border m-3 border-red-600 text-white w-40 rounded-xl	"
              onClick={openModal}
            >
              delete
            </button>
          </div>
        </div>
        <div className="detail-group w-2/5 flex flex-col m-10  	">
          <h2 className="text-yellow-300 text-5xl">{partner?.name}</h2>
          <ul className="flex flex-col">
            <li className="p-2 text-white underline decoration-yellow-300 ">
              <span>
                <a href="reducations@steets.nl ">email:{partner?.email}</a>
              </span>
            </li>
            <li className="p-2">
              <span className=" decoration-yellow-300 ">
                <a className=" text-white underline" href="+31 2321 1233">
                  tell:{partner?.phone}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div
          className={`${
            isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
          }`}
        >
          <div className="modal-container">
            <p>Are you sure you want delete this partner?</p>{" "}
            <div className="button-fields">
              <button
                onClick={() => removeParners}
                className="rounded-r-xl border m-3  border-red-600 text-black w-40 rounded-xl"
              >
                delete
              </button>
              <button
                className=" border  border-yellow-300 text-black w-40 rounded-xl	"
                onClick={closeModal}
              >
                cancel
              </button>
            </div>
            <button className="close-modal-btn " onClick={closeModal}>
              <img src="/grid/close.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPartner;
