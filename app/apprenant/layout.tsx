
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apprenant",
};


/**
 * Layout de toutes les pages qui sont dans le dossier apprenant
 * @param param0 
 * @returns 
 */
export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
            <body   
                >
                {children}
            </body>
        </html>
    )

}
