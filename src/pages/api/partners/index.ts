import type { NextApiRequest, NextApiResponse } from "next";
import partnersData from "../../../backend-data/data.json";
import { v4 as uuid } from "uuid";
import * as fs from "fs";
import { PartnerInterface } from "../../../interfaces/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { method, body } = req;

  if (method === "GET") {
    res.json({ data: partnersData });
  }

  if (method === "POST") {
    const newPartner: PartnerInterface = {
      ...body,
      id: uuid(),
      slug: body.name.split(" ").join("_").toLowerCase(),
    };

    partnersData.unshift(newPartner);

    fs.writeFile("src/backend-data/data.json", JSON.stringify(partnersData), err => {
      if (err) console.log(err);
    });

    res.status(201).json(newPartner);
  }

}
