import { PartnerInterface } from "../interfaces"
///i took data from backend
interface PartnerListResponse {
    data: PartnerInterface[]
}

interface OnePartnerResponse {
    data: PartnerInterface
}

class PartnerService {

    private static instance: PartnerService

    private partnerList: PartnerInterface[] | null = null //defined partnerList as object
  //partnerList like a object PartnerInterface
    async getList(): Promise<PartnerInterface[]> {
        let response = await fetch('/api/partners')
        let responseObject: PartnerListResponse = await response.json()
        this.partnerList = responseObject.data
         
        return responseObject.data
    }

    async getOne(slug: String) : Promise<PartnerInterface> {
        if (this.partnerList === null) {
            await this.getList()
        } console.log(this.partnerList)//get
          
        let result = this.partnerList?.find(partner => partner.slug === slug)
       console.log(this.partnerList)
        return result as PartnerInterface
    }
  

    async updateOne(partner: PartnerInterface): Promise<PartnerInterface> {
           if (this.partnerList === null) {
            await this.getList()
        } console.log(this.partnerList)//get
       
         
        
      
            
        return partner as PartnerInterface
    }
    

    public static getInstance() : PartnerService {
        if (!PartnerService.instance) {
            PartnerService.instance = new PartnerService()
        }
        return this.instance
    }

}

export default PartnerService

//singleton pattern