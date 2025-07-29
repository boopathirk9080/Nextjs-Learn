"use client";
import React from "react";

function page({params}) {
  return (
    <div>
      <h1>Test:{params.slug}</h1>
    </div>
  );
}

export default page;
