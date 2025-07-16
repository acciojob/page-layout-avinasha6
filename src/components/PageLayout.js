// import React from 'react'

// const PageLayout = ({children}) => {
//   return (
//     <div>
//       <head>Welcome to my website</head>
//       <p>{children}</p>
//       {/* <Footer>2023 my website all rights reserved</Footer> */}
//     </div>
//   )
// }

// export default PageLayout

import React from 'react';

const PageLayout = ({ children,header,footer }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{children}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
