import React, { useEffect } from 'react';

const TradingRoom = () => {
  useEffect(() => {
    // Load the TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: 1100,
        height: 500,
        
        symbol: 'BINANCE:BTCUSDT',
        interval: '60',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'zh_CN',
        toolbar_bg: '#f1f3f6',
        enable_publishing: true,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        studies: ['MACD@tv-basicstudies', 'MOM@tv-basicstudies'],
        container_id: 'tradingview_11892',
      });
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_11892"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://cn.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">BTCUSDT图表</span>
        </a>
       
      </div>
    </div>
  );
};

export default TradingRoom;
