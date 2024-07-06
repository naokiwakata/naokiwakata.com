import { Providers } from './providers'
import { fonts } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={fonts.montserrat.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
