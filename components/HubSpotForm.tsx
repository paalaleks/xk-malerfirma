"use client";

import { useEffect } from "react";

interface HubSpotFormOptions {
  region: string;
  portalId: string;
  formId: string;
  target: string;
}

interface HubSpotForms {
  create: (options: HubSpotFormOptions) => void;
}

interface HubSpot {
  forms: HubSpotForms;
}

declare global {
  interface Window {
    hbspt: HubSpot;
  }
}

export function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "145384940",
          formId: "c8b48f17-2e3d-4de2-8496-02de75805370",
          target: "#hubspotForm",
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>;
}
