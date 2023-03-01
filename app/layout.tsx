import "./../styles/globals.css"
import Footer from "./components/footer/footer";
import NavBar from "../components/NavBar/Nav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <html lang="en">
            <body className="font-inter bg-lightning bg-cover bg-center bg-no-repeat bg-fixed">
                {children}
                <NavBar/>
                <Footer/>
            </body>
        </html>
    )
}