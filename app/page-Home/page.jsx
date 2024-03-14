import Home from "@/components/Home"

/**
 * @type {import("next").metadata}
 */
export const metadata = 
{
    title: 'Home | CarAuction',
    description: "Page d&apos;accueil de notre site web CarAuction contenant une brève description et les objectifs de ce dernier",
    openGraph: {
        title: 'Home | CarAuction',
        description: "Page d&apos;accueil de notre site web CarAuction contenant une brève description et les objectifs de ce dernier",
        images: ['/home/Background-home2.png']
    }
}

export default function HomePage() {
    return (
        <>
            <Home/>
        </>
    );
}
