import React, { ReactElement } from "react";
import About from "../components/About";
import Project from "../components/Project";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

interface Props {}

export default function Index({}: Props): ReactElement {
  return (
    <Layout>
      <Hero />
      <About />
      <Stack />
      <Project />
    </Layout>
  );
}
