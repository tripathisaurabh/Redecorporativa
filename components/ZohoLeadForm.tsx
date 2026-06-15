"use client";

import { useEffect } from "react";

const FORM_SRC =
  "https://forms.zohopublic.com/demo1redecorporativa21/form/ZohoPartnerLeadForm/formperma/x0pY-qFcDbBH-2PwLKZH83r7H7qGjqMVxkS4zLJ2gio?embeded=redecorp";

export default function ZohoLeadForm() {
  useEffect(() => {
    try {
      const zf_frame = document.getElementById("ziframe_73002") as HTMLIFrameElement | null;
      if (!zf_frame) return;
      let ifrmSrc = zf_frame.src;

      if (!/[?&]referrername=/.test(ifrmSrc)) {
        let rfr = window.location.href;
        try {
          rfr =
            window.self !== window.top
              ? window.top?.location.href ?? rfr
              : /^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr)
              ? rfr
              : "";
        } catch (e) {
          /* cross-origin top access blocked — ignore */
        }

        if (rfr && rfr !== "") {
          if (rfr.length > 1800) {
            const queryIndex = rfr.indexOf("?");
            if (queryIndex > -1) rfr = rfr.substring(0, queryIndex);
            if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
          }
          ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + "referrername=" + encodeURIComponent(rfr);
        }
      }

      if (zf_frame.src !== ifrmSrc) zf_frame.src = ifrmSrc;
    } catch (e) {
      /* no-op */
    }
  }, []);

  return (
    <iframe
      id="ziframe_73002"
      aria-label="Contact Us"
      frameBorder={0}
      title="Contact Us"
      style={{ height: 820, width: "100%", border: "none", background: "#ffffff" }}
      src={FORM_SRC}
    />
  );
}
