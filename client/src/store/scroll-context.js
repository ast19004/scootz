import React, { useState, useEffect } from "react";

const ScrollContext = React.createContext({
  offset: 0,
});

export const ScrollContextProvider = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <ScrollContext.Provider
      value={{
        offset: offset,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
