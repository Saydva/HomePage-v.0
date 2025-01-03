import React from "react";

function Color() {
  return (
    <div className="flex flex-row justify-center gap-2 py-5">
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
    </div>
  );
}

export default Color;
