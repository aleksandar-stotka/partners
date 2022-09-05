import { PartnerInterface } from "../interfaces"

interface PartnerListResponse {
    data: PartnerInterface[]
}

interface OnePartnerResponse {
    data: PartnerInterface
}

class PartnerService {

    private static instance: PartnerService

    private partnerList: PartnerInterface[] | null = null

    async getList(): Promise<PartnerInterface[]> {
        let response = await fetch('/api/partners')
        let responseObject: PartnerListResponse = await response.json()
        this.partnerList = responseObject.data
        return responseObject.data
    }

    async getOne(slug: String) : Promise<PartnerInterface> {
        if (this.partnerList === null) {
            await this.getList()
        }
        let result = this.partnerList?.find(partner => partner.slug === slug)
        return result as PartnerInterface
    }

    async updateOne(partner: PartnerInterface): Promise<PartnerInterface> {
               
    
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