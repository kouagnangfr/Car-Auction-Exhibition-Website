import Event2 from "@/components/Event2"

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Evenement 2 | CarAuction',
    description : 'Presention et informations sur la deuxieme vente aux encheres de notre entreprise CarAuction',
    openGraph:
    {
        title: 'Evenement 1 | CarAuction',
        description : 'Presention et informations sur la deuxieme vente aux encheres de notre entreprise CarAuction',
        images:['/home/car3.jpg']
    }
}

export default function Event2Page()
{
    return<>
        <Event2/>
    </>
}