import React from "react";

function Color() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2 py-5 max-w-7xl mx-auto">
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-primary-content">primary-content</button>
      <button className="btn btn-secondary">secondary</button>
      <button className="btn btn-secondary-content">secondary-content</button>
      <button className="btn btn-accent">accent</button>
      <button className="btn btn-accent-content">accent-content</button>
      <button className="btn btn-neutral">neutral</button>
      <button className="btn btn-neutral-content">neutral-content</button>
      <button className="btn btn-base-100">base-100</button>
      <button className="btn btn-base-200">base-200</button>
      <button className="btn btn-ebase-300">base-300</button>
      <button className="btn btn-bse-content">base-content</button>
      <button className="btn btn-info">info</button>
      <button className="btn btn-info-content">info-content</button>
      <button className="btn btn-success">success</button>
      <button className="btn btn-success-content">success-content</button>
      <button className="btn btn-warning">warning</button>
      <button className="btn btn-warning-content">warning-content</button>
      <button className="btn btn-error">error</button>
      <button className="btn btn-error-content">error-content</button>
    </div>
  );
}

export default Color;
