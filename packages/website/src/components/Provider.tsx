import * as React from "react";
import { Provider as ReakitProvider, unstable_mergeSystem } from "reakit";
import * as playgroundSystem from "reakit-playground/system";
import * as bootstrapSystem from "reakit-system-bootstrap";

const system = unstable_mergeSystem(bootstrapSystem, playgroundSystem, {
  palette: {
    ...bootstrapSystem.palette,
    primary: "#6a50ee",
    text: "#484a7a",
    link: "#007bff"
  }
});

function Provider(props: { children: React.ReactNode }) {
  return (
    <ReakitProvider unstable_system={system}>{props.children}</ReakitProvider>
  );
}

export default Provider;
