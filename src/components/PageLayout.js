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

const PageLayout = ({ name }) => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>{name}</p>
      <footer>© 2023 My Website. All rights reserved.</footer>
    </div>
  );
};

export default PageLayout;
