import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { PartnerInterface } from "../../../interfaces";
import PartnerService from "../../../services/PartnerService";
import Form from "../../../components/Form";

const partnerService = PartnerService.getInstance();

const SelectedPartner = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const [partner, setPartner] = useState<PartnerInterface | null>(null);
  const [showForm, setShowForm] = useState(false);

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
    <div className="flex justify-center  w-full    bg-black ">
      <div className="inner w-4/5 flex justify-center gap-8   ">
        <div className="form-group w-2/5">
          <img src={partner?.image} />
          {showForm && <Form />}

          <div className="button-group flex justify-center ">
            {!showForm && (
              <button
                style={{
                  background: "black",
                  border: "1px solid yellow",
                  borderRadius: "30px",
                  width: "10rem",
                  height: "2rem",
                  textAlign: "center",
                  color: "white",
                }}
                onClick={() => setShowForm(true)}
              >
                edit
              </button>
            )}
            <button
              style={{
                background: "black",
                border: "1px solid red",
                color: "white",
                borderRadius: "30px",
                width: "10rem",
                height: "2rem",
                textAlign: "center",
              }}
              onClick={openModal}
            >
              delete
            </button>
          </div>
        </div>
        <div className="detail-group w-2/5 flex flex-col m-10  	">
          <h2 className="text-yellow-300 text-5xl">{partner?.name}</h2>
          <ul className="flex flex-col">
            <li className="p-2">
              <span className=" text-white underline decoration-yellow-300 ">
                <a href="reducations@steets.nl ">email:{partner?.email}</a>
              </span>
            </li>
            <li className="p-2">
              <span className=" text-white underline decoration-yellow-300 ">
                <a href="+31 2321 1233">tell:{partner?.phone}</a>
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
                style={{
                  background: "white",
                  border: "1px solid red",
                  color: "black",
                  borderRadius: "30px",
                  width: "10rem",
                  height: "2rem",
                  textAlign: "center",
                }}
                onClick={openModal}
              >
                delete
              </button>
              <button
                style={{
                  border: "1px solid yellow",
                  color: "black",
                  borderRadius: "30px",
                  width: "10rem",
                  height: "2rem",
                  textAlign: "center",
                  margin: "1em",
                }}
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
