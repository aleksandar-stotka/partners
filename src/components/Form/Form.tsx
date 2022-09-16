import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { PartnerInterface } from "../../interfaces";

import { v4 } from "uuid";
import PartnerService from "../../services/PartnerService";
import router, { useRouter } from "next/router";
import { idText } from "typescript";

// eslint-disable-next-line react-hooks/rules-of-hooks
interface PartnerListParams {
  partners: PartnerInterface[];
}
const partnerService = PartnerService.getInstance();

const Form = (partners: PartnerInterface) => {
  console.log(partners);
  const router = useRouter();

  const [newPartners, setPartners] = useState<
    PartnerInterface | PartnerInterface[]
  >(partners);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<string>("");

  //////////////////////////////////////////////////////////////////

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/partners", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setPartners(json.newPartners))
      .then(() => {
        window.location.reload();
      });
  };
  useEffect(() => {}, []);
  /////////////////////////////////////////////////////////////////////////
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
          value={name}
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
        value={email}
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
        value={phone}
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
