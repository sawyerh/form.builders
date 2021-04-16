import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

/**
 * @see https://mermaid-js.github.io/mermaid/#/sequenceDiagram
 */
const Mermaid = (props) => {
  mermaid.mermaidAPI.initialize({
    startOnLoad: false,
    securityLevel: "loose", // allow HTML tags
  });

  if (!props.children) return "Error rendering chart";

  const [svg, setSvg] = useState();

  useEffect(() => {
    const mermaidGraph = `sequenceDiagram
        autonumber
        ${props.children}
    `;
    mermaid.mermaidAPI.render("graphDiv", mermaidGraph, (svg) => setSvg(svg));
  }, []);

  return svg ? (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  ) : (
    <div>Loading chart...</div>
  );
};

export default Mermaid;
