import React, { memo, useCallback, useState, ReactElement } from "react";
import { CacheProvider, EmotionCache } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import shadow from "react-shadow";
import createCache from "@emotion/cache";
import { ButtonTheme } from "../components/Button/Button.theme";

const SSG_MODULE_CLASS_NAME = "ssg-module"; //used as emotion cache key and root css class

/**
 * Wraps children with Shadow DOM and emotion cache.
 */
const AppProvider: React.FC<{
 children: ReactElement | ReactElement[];
 theme: { breakpoints: `${number}px`[] } & ButtonTheme;
}> = ({ children, theme }) => {
 const [emotionCache, setEmotionCache] = useState<EmotionCache | null>(null);

 const hostRefHandler = useCallback((node: HTMLDivElement) => {
  setEmotionCache(
   createCache({
    key: SSG_MODULE_CLASS_NAME,
    container: node,
   })
  );
 }, []);

 return (
  <shadow.div className={SSG_MODULE_CLASS_NAME}>
   <div ref={hostRefHandler}>
    {emotionCache && (
     <CacheProvider value={emotionCache}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
     </CacheProvider>
    )}
   </div>
  </shadow.div>
 );
};

export default memo(AppProvider);
