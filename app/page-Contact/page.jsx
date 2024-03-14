import Contact from "@/components/Contact"

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Contact | CarAuction',
    description : 'Page des contacts Pour nous joindre, nous poser des questions ou laisser des messages',
    openGraph:
    {
        title: 'Contact | CarAuction',
        description : 'Page des contacts Pour nous joindre, nous poser des questions ou laisser des messages',
        images:['/home/car3.jpg']
    }
}

export default function ContactPage()
{
    return<>
        <Contact/>
    </>
}