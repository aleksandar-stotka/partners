import { NextApiRequest, NextApiResponse } from "next";
import partnersData from "../../../backend-data/data.json";
import { PartnerInterface } from "../../../interfaces/index";
import * as fs from "fs";

interface ErrorInterface {
  status: number;
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PartnerInterface | ErrorInterface>
) {
  const { method, query, body } = req;
  console.log(body);

  const partner = partnersData.find((partner) => partner.slug === query.slug);

  if (!partner) {
    return res.status(404).json({
      status: 404,
      message: "Not Found",
    });
  }

  if (method === "GET") {
    res.json({ ...partner });
  }

  if (method === "DELETE") {
    let removedPartner: PartnerInterface | null = null;

    const newPartnersData = partnersData.filter((p) => {
      if (p.id !== partner.id) {
        return p;
      }

      removedPartner = p;
      return;
    });

    fs.writeFile(
      "src/backend-data/data.json",
      JSON.stringify(newPartnersData),
      (err) => {
        if (err) console.log(err);
      }
    );

    removedPartner && res.status(201).json(removedPartner);
  }

  if (method === "PUT") {
    const editedPartner = partnersData.find((p) => p.id === partner.id);

    if (editedPartner) {
      const updatedPartnersData = partnersData.map((p) =>
        p.id === partner.id ? JSON.parse(body) : p
      );

      fs.writeFile(
        "src/backend-data/data.json",
        JSON.stringify(updatedPartnersData),
        (err) => {
          if (err) console.log(err);
        }
      );

      res.status(201).json(JSON.parse(body));
    }
  }
}
