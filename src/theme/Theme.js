import { createTheme } from "@mui/material";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

export const theme = createTheme({
  direction: "rtl",
});
export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  export const customPaper = {
    width: "30vw",
    height: "40vh",
    padding: "20px",
    display: "flex",
    background:"rgba(255, 255, 255, 0.47)",
    backdropFilter: "blur(6.4px)",
    flexDirection: "column",
    justifyContent: "space-around",
  };