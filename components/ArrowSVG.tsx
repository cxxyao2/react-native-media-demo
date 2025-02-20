import { View, Text } from 'react-native';
import React from 'react';
import { Svg, G, Path } from 'react-native-svg';

const ArrowSVG = ({
  fill = 'none',
  stroke = 'black',
  width = 300,
  height = 300,
  strokeWidth = 2,
}) => {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <G id="Layer_1">
        <path
          id="svg_2"
          d="m50.74999,138.13498l152.06999,0l0,-72l-23.30999,0l46.61999,-35.99999l46.62001,35.99999l-23.31001,0l0,108l-198.68998,0l-0.00001,-36.00001z"
          stroke={stroke}
          fill={fill}
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
};

export default ArrowSVG;
