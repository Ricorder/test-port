import Svg, { SvgProps, G, Path, Circle } from "react-native-svg"
const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 64 64"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path fill="#FFDD95" d="m31 5 24.249 14v28L31 61 6.751 47V19z" />
      <Circle cx={31} cy={5} r={3} fill="#E43535" />
      <Circle cx={31} cy={60} r={3} fill="#E43535" />
      <Circle cx={55} cy={47} r={3} fill="#E43535" />
      <Circle cx={7} cy={47} r={3} fill="#E43535" />
      <Circle cx={55} cy={19} r={3} fill="#E43535" />
      <Circle cx={7} cy={19} r={3} fill="#E43535" />
      <Path
        fill="#22BA8E"
        d="m23.38 28.209-1.572-1.573 2.828-2.828 1.573 1.572A8.948 8.948 0 0 1 29 24.223V22h4v2.223a8.948 8.948 0 0 1 2.791 1.157l1.573-1.572 2.828 2.828-1.572 1.573c.533.845.929 1.786 1.157 2.791H42v4h-2.223a8.948 8.948 0 0 1-1.157 2.791l1.572 1.573-2.828 2.828-1.573-1.572A8.948 8.948 0 0 1 33 41.777V44h-4v-2.223a8.948 8.948 0 0 1-2.791-1.157l-1.573 1.572-2.828-2.828 1.572-1.573A8.948 8.948 0 0 1 22.223 35H20v-4h2.223a8.948 8.948 0 0 1 1.157-2.791ZM31 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </G>
  </Svg>
)
export default SettingsIcon