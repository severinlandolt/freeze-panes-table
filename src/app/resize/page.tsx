"use client";
import React, { useRef } from "react";
import useResizeX from "@/hooks/useResizeX";
import useResizeY from "@/hooks/useResizeY";
import Table from "../_components/table";

const ResizablePanels = () => {
  const containerRef = useRef(null);
  const panelRef = useRef(null);
  const handleWidth = 16;
  const maxContainerWidth = 736;
  const maxContainerHeight = 736;

  const { panelWidth, onResizeStartX } = useResizeX(
    containerRef,
    panelRef,
    maxContainerWidth
  );

  const { panelHeight, onResizeStartY } = useResizeY(
    containerRef,
    panelRef,
    maxContainerHeight
  );

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        // maxHeight: `${maxContainerHeight}px`,
        // maxWidth: `${maxContainerWidth}px`,
        backgroundColor: "#6b7280",
      }}
    >
      <div
        ref={panelRef}
        style={{
          position: "relative",
          width: `${panelWidth}px`,
          height: `${panelHeight}px`,
          maxWidth: "100%",
          maxHeight: "100%",
          paddingRight: `${handleWidth}px`,
          paddingBottom: `${handleWidth}px`,
          backgroundColor: "#f1f2f4",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            height: "100%",
            width: `${handleWidth}px`,
            backgroundColor: "red",
            borderLeft: "1px solid #e5e7eb",
            cursor: "ew-resize",
          }}
          onPointerDown={onResizeStartX}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: `${handleWidth}px`,
            backgroundColor: "#ffcc33",
            borderLeft: "1px solid #e5e7eb",
            cursor: "ew-resize",
          }}
          onPointerDown={onResizeStartY}
        ></div>
        <div className="h-4/5 w-4/5 bg-green-500"></div>
        {/* <Table /> */}
      </div>
    </div>
  );
};

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 16px",
      }}
    >
      <ResizablePanels />
    </div>
  );
}

export default App;
