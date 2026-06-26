"use client";

import { useEffect } from "react";

export default function TidioChat() {
  useEffect(() => {
    if (document.getElementById("tidio-script")) return;
    const s = document.createElement("script");
    s.id = "tidio-script";
    s.src = "https://code.tidio.co/y4e8hkytrqe5h46rkfscnqzfmdavin55.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null;
}
