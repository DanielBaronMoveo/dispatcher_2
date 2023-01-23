import Svg, {Path} from 'react-native-svg';
import React from 'react';
import colors from '../../constants/colors';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  color?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  path: string;
  style?: StyleProp<ViewStyle>;
}
const Icon: React.FC<Props> = ({
  color = colors.WHITE_BASE,
  width = 30,
  height = 30,
  path,
  style,
}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path d={path} fill={color} />
    </Svg>
  );
};
export default Icon;
