import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { PartnerInterface } from "../../interfaces";

import { v4 } from "uuid";
import PartnerService from "../../services/PartnerService";
import { useRouter } from "next/router";
import { idText } from "typescript";
import partners from "../../pages/api/partners";

// eslint-disable-next-line react-hooks/rules-of-hooks
interface PartnerListParams {
  partners: PartnerInterface[];
}
const partnerService = PartnerService.getInstance();

const Form = () => {
  const router = useRouter();

  const slug = router.query.slug as any;

  const [newPartners, setPartners] = useState<
    PartnerInterface | PartnerInterface[]
  >([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<any>(null);

  //////////////////////////////////////////////////////////////////
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<any> => {
    const ImageName = event.target.value.split("\\")[2];
    const Image = event.target.value;
    const fileLoaded = URL.createObjectURL(event.target.files[0]);
    const files = event.target.files;
    console.log(files, "filses");
    //...
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    const data = {
      name,
      email,
      phone,
      image,
    };

    const res = fetch("/api/partners", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {}, []);
  //////////////////////////////////////////////z///////////////////////////
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
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/jpg,.gif,.png,.svg,.webp audio/wav,.mp3"
        />
        <img
          src={image}
          style={{
            display: "flex",
            border: "2px solid tomato",
            maxWidth: "300px",
            maxHeight: "300px",
          }}
        />
      </div>

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
      <button>Pick file</button>
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
