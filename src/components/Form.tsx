import React, { ChangeEvent, FormEvent, useState,useEffect } from "react";
import { PartnerInterface } from "../interfaces";
import { v4 } from "uuid";
import PartnerService from "../services/PartnerService";

const partnerService = PartnerService.getInstance();

const Form = () => {
  const [partners, setPartners] = useState<
    PartnerInterface | PartnerInterface[]
  >([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
     
   useEffect(() => {
     
   }, []);

  return (
    <form
      onSubmit={submitHandler}
      method="POST"
      action="/api/partners"
      className="flex flex-col w-full"
      style={{ padding: "0px 20px" }}
    >
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
