// import React, { useEffect, useState } from "react";

// const Test = () => {

//     const [count, setCount] = useState(0)

//     const handleButton = () => {
//       setCount(count + 1);
//     }

    
//     return(
//         <div>
//             <button onClick={handleButton()}>Increment</button>
//             <p>{count}</p>
//         </div>
//     );
// }

import React, { useCallback, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
