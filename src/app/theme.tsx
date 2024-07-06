import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

export const theme = extendTheme({
    fonts: {
        heading: fonts.notoSansJP.style.fontFamily,
        body: fonts.notoSansJP.style.fontFamily,
    }
});

export default theme;