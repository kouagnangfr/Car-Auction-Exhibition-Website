import Event1 from "@/components/Event1"

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Evenement 1 | CarAuction',
    description : 'Presention et informations sur la premiere vente aux encheres de notre entreprise CarAuction',
    openGraph:
    {
        title: 'Evenement 1 | CarAuction',
        description : 'Presention et informations sur la premiere vente aux encheres de notre entreprise CarAuction',
        images:['/home/Background-home2.png']
    }
}

export default function Event1Page()
{
    return <>
        <Event1/>
    </>
}