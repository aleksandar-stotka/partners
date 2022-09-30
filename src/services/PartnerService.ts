import { PartnerInterface } from "../interfaces";
import { useRouter } from "next/router";

///i took data from backend
interface PartnerListResponse {
  data: PartnerInterface[];
}

interface OnePartnerResponse {
  data: PartnerInterface;
}

class PartnerService {
  private static instance: PartnerService;

  private partnerList: PartnerInterface[] | null = null; //defined partnerList as object
  //partnerList as A object PartnerInterface
  async getList(): Promise<PartnerInterface[]> {
    let response = await fetch("/api/partners");
    let responseObject: PartnerListResponse = await response.json();
    this.partnerList = responseObject.data;
    return responseObject.data;
  }

  async getOne(slug: String): Promise<PartnerInterface> {
    if (this.partnerList === null) {
      await this.getList();
    }

    let result = this.partnerList?.find((partner) => partner.slug === slug);
    console.log(this.partnerList, "services");
    return result as PartnerInterface;
  }
  async deleteOne(id: String): Promise<PartnerInterface> {
    const deleteItem = await fetch(`/api/partners/${id}`, {
      method: "DELETE",
    });
    return deleteItem as unknown as PartnerInterface;
  }

  async updateOne(partner: PartnerInterface): Promise<PartnerInterface> {
    
    // initialize formData object
    const newPartners = {
      ...partner,
    
    };
   
    const newPartnersData = await fetch(`/api/partners`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPartners),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(newPartners);

    //return response.json();
    return newPartnersData as unknown as PartnerInterface;
  }

  
  public static getInstance(): PartnerService {
    if (!PartnerService.instance) {
      PartnerService.instance = new PartnerService();
    }
    return this.instance;
  }
}

export default PartnerService;

//singleton pattern
