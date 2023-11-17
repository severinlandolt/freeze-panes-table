"use client";
import { useState } from "react";

const useResizeX = (
  containerRef: any,
  panelRef: any,
  initialWidth: any,
  minWidth = 220
) => {
  const [panelWidth, setPanelWidth] = useState(initialWidth);

  const onResizeStartX = () => {
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = "none";
      panelRef.current.style.userSelect = "none";
    }
    if (containerRef.current) {
      containerRef.current.classList.add("resizing");
      containerRef.current.style.cursor = "ew-resize";
    }
    window.addEventListener("pointermove", onResize);
    window.addEventListener("pointerup", onResizeEnd);
  };

  const onResize = (e: any) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - bounds.left;
      if (newWidth >= minWidth) {
        setPanelWidth(newWidth);
      } else {
        setPanelWidth(minWidth);
      }
    }
  };

  const onResizeEnd = () => {
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = "auto";
      panelRef.current.style.userSelect = "auto";
    }
    if (containerRef.current) {
      containerRef.current.classList.remove("resizing");
      containerRef.current.style.cursor = "auto";
    }
    window.removeEventListener("pointermove", onResize);
    window.removeEventListener("pointerup", onResizeEnd);
  };

  return { panelWidth, onResizeStartX };
};

export default useResizeX;
