import { useState } from "react";

const useResizeY = (
  containerRef: any,
  panelRef: any,
  initialHeight: any,
  minHeight = 0
) => {
  const [panelHeight, setPanelHeight] = useState(initialHeight);

  const onResizeStartY = () => {
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = "none";
      panelRef.current.style.userSelect = "none";
    }
    if (containerRef.current) {
      containerRef.current.classList.add("resizing");
      containerRef.current.style.cursor = "ns-resize";
    }
    window.addEventListener("pointermove", onResize);
    window.addEventListener("pointerup", onResizeEnd);
  };

  const onResize = (e: any) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      const newHeight = e.clientY - bounds.top;
      if (newHeight >= minHeight) {
        setPanelHeight(newHeight);
      } else {
        setPanelHeight(minHeight);
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

  return { panelHeight, onResizeStartY };
};

export default useResizeY;
