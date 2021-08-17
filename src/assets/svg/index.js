import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function BackSvg(props) {
  return (
    <Svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.5 2L2 9.5 9.5 17"
        stroke={props.color ? props.color : '#172356'}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
