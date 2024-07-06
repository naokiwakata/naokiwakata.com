import { Montserrat, Noto_Sans_JP } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    variable: '--font-noto-sans-jp',
});

export const fonts = {
    notoSansJP,
    montserrat,
}