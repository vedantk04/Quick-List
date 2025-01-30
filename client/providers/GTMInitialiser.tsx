"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMInitialiser() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-T6DLSN5G",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return null;
}

export default GTMInitialiser;
