// TradingViewWidget.jsx
import React, { useEffect, useRef } from "react";
let tvScriptLoadingPromise;

const TradingViewChart = () => {
  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_a07d1") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_a07d1",
        });
      }
    }
  }, []);
  return (
    <div className="w-full h-full min-h-[60vh]">
      <div className="tradingview-widget-container w-full h-full max-h-[60vh]">
        <div
          id="tradingview_a07d1"
          className="h-full max-h-[60vh]  rounded-xl"
        />
        <div className="tradingview-widget-copyright"></div>
      </div>
    </div>
  );
};

export default TradingViewChart;
