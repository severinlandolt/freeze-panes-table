"use client";
import React, { useRef } from "react";
import useResizeX from "@/hooks/useResizeX";
import useResizeY from "@/hooks/useResizeY";
import Table from "./_components/table";

export default function Home() {
  const containerRef = useRef(null);
  const panelRef = useRef(null);
  const maxContainerWidth = 1200;
  const maxContainerHeight = 630;

  const { panelWidth, onResizeStartX } = useResizeX(
    containerRef,
    panelRef,
    maxContainerWidth
  );

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div
        ref={containerRef}
        className={`w-full max-w-6xl`}
        style={{
          maxWidth: `${maxContainerWidth}`,
        }}
      >
        <div
          ref={panelRef}
          className={`relative max-w-full h-full`}
          style={{
            width: `${panelWidth}px`,
          }}
        >
          <div
            onPointerDown={onResizeStartX}
            className="absolute inset-y-0 left-full cursor-ew-resize items-center px-2 flex"
          >
            <div className="h-8 w-1.5 rounded-full bg-slate-400"></div>
          </div>
          <Table />
        </div>
      </div>
    </main>
  );
}
