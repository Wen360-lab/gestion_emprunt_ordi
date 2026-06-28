import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};

/**
 * Layout de toutes les pages liées à l'authentification
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
