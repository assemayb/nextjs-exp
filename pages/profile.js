import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function profile() {
  useEffect(() => {
    console.log("component is being mounted");
  }, []);
  return <div>this is the profile page</div>;
}
