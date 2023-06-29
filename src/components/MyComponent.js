import React, { useEffect, useRef } from 'react';
import Atropos from 'atropos';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const atropos = new Atropos(elementRef.current, {
      // Configurações da biblioteca Atropos (opcional)
    });

    return () => {
      atropos.destroy();
    };
  }, []);

  return (
    <div ref={elementRef}>
      {<h1> TESTANDOOOOOOOOOOO</h1>}
    </div>
  );
};

export default MyComponent;
