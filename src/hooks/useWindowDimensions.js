

import { useEffect, useState } from 'react';

function useWindowDimensions(props) {
    
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener("resize", updateDimensions);
    }
    return () => window?.removeEventListener("resize", updateDimensions);
   
  }, []);

    return {
        width, height,
    }
}

export default useWindowDimensions;