"use client";

import React from "react";

interface Props {
  closePrompt: () => void;
  installPrompt: () => void;
}

export default function InstallPromptDialog(props: Props) {
  const { installPrompt, closePrompt } = props;

  return (
    <div className="text-2xl">
      <button className="pr-5" onClick={installPrompt}>Install</button>
      <button onClick={closePrompt}>Close</button>
    </div>
  );
}
