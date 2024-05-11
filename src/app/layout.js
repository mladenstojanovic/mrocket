import Image from "next/image";
import Link from "next/link";
import MRocketLogo from "../../public/svg/rocket.svg";
import NavList from "../components/NavList";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | M Rocket Solutions",
  },
  openGraph: {
    title: "M Rocket Solutions",
    description: "Web Development Consultancy",
  },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-6 max-w-3xl mx-auto">
          <header className="py-10 relative">
            <nav className="relative flex items-center justify-between sm:h-10 ">
              <Link href="/" aria-label="M Rocket">
                <Image
                  priority
                  width={40}
                  height={40}
                  src={MRocketLogo}
                  alt="M Rocket Logo"
                  className="h-10"
                />
              </Link>
              <NavList navId="main" />
            </nav>
          </header>
          <main>{children}</main>
          <footer className="bg-white mt-5">
            <div className="py-6 lg:py-8">
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://mrocketsolutions.com/"
                    className="hover:underline"
                  >
                    M Rocket
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
