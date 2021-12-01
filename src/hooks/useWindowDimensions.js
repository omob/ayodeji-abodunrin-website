

import { useEffect, useState } from 'react';

function useWindowDimensions(props) {
    
  const [width, setWidth] = useState(window?.innerWidth);
  const [height, setHeight] = useState(window?.innerHeight);
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", updateDimensions);
    }
    return () => window?.removeEventListener("resize", updateDimensions);
   
  }, []);

    return {
        width, height,
    }
}

export default useWindowDimensions;