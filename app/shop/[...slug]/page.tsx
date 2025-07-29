"use client";
import React from "react";

function page({ params }) {
  return (
    <div>
      <h1>Test:{params.slug[0]}/{params.slug[1]}/{params.slug[2]}</h1>
    </div>
  );
}

export default page;
