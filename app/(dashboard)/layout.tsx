
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};


/**
 * Layout de toutes les pages qui sont dans le dossier (dashboard)
 * @param param0 
 * @returns 
 */
export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) 
{
    return (
        <html lang="fr" >
            <body>
                {children}
            </body>
        </html>
    )

}
