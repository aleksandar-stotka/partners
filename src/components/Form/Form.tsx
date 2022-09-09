import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { PartnerInterface } from "../../interfaces";
import { v4 } from "uuid";
import PartnerService from "../../services/PartnerService";

const partnerService = PartnerService.getInstance();
interface PartnerListParams {
  partners: PartnerInterface[];
}
const Form = (params: PartnerListParams) => {
  const { partners } = params;
  console.log(partners);

  const [newPartners, setPartners] = useState<
    PartnerInterface | PartnerInterface[]
  >([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await partnerService.getList().then((partners) => {
      const newPartner = {
        ...partners,
        name: name,
        image: image,
        phone: phone,
        email: email,
      };

      console.log(newPartner);
      setPartners(newPartner);
    });
  };
  useEffect(() => {}, []);

  return (
    <form onSubmit={submitHandler} style={{ padding: "0px 20px" }}>
      <h2 className="text-xl text-white pt-4 pb-3">Add a partner?</h2>
      <div
        className="flex-row flex py-2"
        style={{
          border: "0",
          borderBottom: "2px solid yellow",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="input"
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="pl-2"
          style={{
            background: "black",
            outline: "none",
          }}
        />
      </div>
      <div></div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        style={{
          border: "0",
          outline: "none",
          borderBottom: "2px solid yellow",
          background: "black",
        }}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        onChange={(e) => setPhone(e.target.value)}
        id="phone"
        style={{
          border: "0",
          outline: "none",
          borderBottom: "2px solid yellow",
          background: "black",
        }}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="input"
        onChange={(e) => setImage(e.target.value)}
        id="image"
        style={{
          border: "0",
          outline: "none",
          borderBottom: "2px solid yellow",
          background: "black",
        }}
      />
      <button
        type="submit"
        style={{
          background: "black",
          border: "1px solid yellow",
          borderRadius: "30px",
          width: "10rem",
          height: "2rem",
          textAlign: "center",
        }}
        className="mt-5"
      >
        Add partner
      </button>
    </form>
  );
};

export default Form;
