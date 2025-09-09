import "./globals.css";

export const metadata = {
    title: "API Playstation",
    description: "Projeto pra mostrar jogos de ps4 e ps5",
    icons: {
        icon: "/images/logoPS.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
