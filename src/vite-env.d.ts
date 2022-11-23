/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_MANIFEST_VERSION: "V3" | "V2";
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }