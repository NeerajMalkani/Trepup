import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TrepupLogo = () => {
  return (
    <Svg width={102} height={34}>
      <Path fill="none" d="M0 34V0h102v34z" />
      <Path d="M76 5v11.51c0 1.93-2.14 3.5-4.07 3.5s-4-1.57-4-3.5V5H64v10.15c-.19 4.69 2.89 8.65 7.58 8.84s8.21-3.46 8.4-8.15V5Z" fill="#0066c1" fillRule="evenodd" />
      <Path
        d="M9 9V5H4V0H0v16.7a7.67 7.67 0 0 0 4.53 6.62 7.43 7.43 0 0 0 3.09.68H9v-3.88H7.54A3.63 3.63 0 0 1 4 16.28V9ZM52.51 5A9.52 9.52 0 0 0 43 14.5V34h4V22.28l.78.45A9.51 9.51 0 1 0 52.51 5ZM58 14.5A5.54 5.54 0 1 1 52.51 9 5.54 5.54 0 0 1 58 14.5ZM91.51 5A9.52 9.52 0 0 0 82 14.5V34h4V22.28l.78.45A9.5 9.5 0 1 0 91.51 5ZM97 14.5A5.54 5.54 0 1 1 91.51 9 5.54 5.54 0 0 1 97 14.5ZM37 15.76a5.6 5.6 0 0 1-2.67 3.64 5.71 5.71 0 0 1-6.65-.66l11-6.79 1.64-.95s-.2-.5-.42-.92c-.14-.27-.51-.85-.51-.85a9.49 9.49 0 0 0-16.09 10 9.38 9.38 0 0 0 5.78 4.39 9.5 9.5 0 0 0 11.66-7l.1-.47-3.7-.85Zm-11.2-1.13a5.69 5.69 0 0 1 9-4.74l-9 5.52c.03-.25 0-.78 0-.78ZM20 5c-.37 0-.74.07-1.11.13l-.77.14a7.81 7.81 0 0 0-1.93.73l-.2.1-.26.15c-.21.11-.5.28-.75.44V5H11v18.89h4v-9.18a10.5 10.5 0 0 1 .11-1.1v-.1a5.38 5.38 0 0 1 1.37-2.9 3.19 3.19 0 0 1 .32-.3l.18-.16.37-.27.12-.07.21-.13.23-.13a6.2 6.2 0 0 1 2-.73l.42-.07V5Z"
        fill="#0066c1"
      />
    </Svg>
  );
};

export default TrepupLogo;
