import Pricing from "@/components/Pricing"

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Pricing | CarAuction',
    description : 'Page contenant les differents forfait, types de places et avantages de ces dernier pour assister aux evenements',
    openGraph:
    {
        title: 'Pricing | CarAuction',
        description : 'Page contenant les differents forfait, types de places et avantages de ces dernier pour assister aux evenements',
        images:['/home/car3.jpg']
    }
}

export default function PricingPage()
{
    return<>
        <Pricing/>
    </>
}