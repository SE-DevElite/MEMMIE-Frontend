import * as React from 'react'
import Svg, { Mask, Path, Circle } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const PictureIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 25}
      height={height || 19}
      viewBox="0 0 25 19"
      fill="none">
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={25}
        height={19}
        fill="#000">
        <Path fill="#fff" d="M0 0H25V19H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 1a5 5 0 00-5 5v5.927L5.927 9.97a3.5 3.5 0 013.357.129l1.818 1.086a2.5 2.5 0 003.047-.375l1.94-1.934a3.5 3.5 0 015.17.25L23 11.233V6a5 5 0 00-5-5H7zm15.986 11.786l-2.498-3.023a2.5 2.5 0 00-3.692-.178l-1.94 1.934a3.5 3.5 0 01-4.268.525l-1.817-1.087a2.5 2.5 0 00-2.398-.092l-4.335 2.16A5 5 0 007 17.406h11a5 5 0 004.986-4.62z"
        />
      </Mask>
      <Path
        d="M2 11.927H1v1.615l1.446-.72L2 11.927zM5.927 9.97l-.446-.895.446.895zm3.357.129l-.513.858.513-.858zm1.818 1.086l.513-.858-.513.858zm3.047-.375l-.706-.708.706.708zm1.94-1.934l-.705-.708.706.709zm5.17.25l-.771.637.77-.637zM23 11.233l-.77.637L24 14.014v-2.78h-1zm-.014 1.553l.997.075.03-.402-.256-.31-.771.637zm-2.498-3.023l.77-.637-.77.637zm-3.692-.178l.706.708-.706-.708zm-1.94 1.934l.705.708-.706-.708zm-4.268.525l-.513.858.513-.858zm-1.817-1.087l.513-.858-.513.858zm-2.398-.092l.446.895-.446-.895zm-4.335 2.16l-.446-.895-.633.316.086.702.993-.123zM3 6a4 4 0 014-4V0a6 6 0 00-6 6h2zm0 5.927V6H1v5.927h2zm-.554.895l3.927-1.957-.892-1.79-3.927 1.957.892 1.79zm3.927-1.957a2.5 2.5 0 012.398.092L9.797 9.24a4.5 4.5 0 00-4.316-.165l.892 1.79zm2.398.092l1.817 1.087 1.027-1.717L9.797 9.24l-1.026 1.717zm1.817 1.087a3.5 3.5 0 004.267-.525l-1.412-1.417a1.5 1.5 0 01-1.828.225l-1.027 1.717zm4.267-.525l1.94-1.934-1.41-1.417-1.942 1.934 1.412 1.417zm1.94-1.934a2.5 2.5 0 013.693.178l1.541-1.274a4.5 4.5 0 00-6.645-.32l1.412 1.416zm3.693.178l1.741 2.107 1.542-1.274-1.742-2.107-1.541 1.274zM22 6v5.233h2V6h-2zm-4-4a4 4 0 014 4h2a6 6 0 00-6-6v2zM7 2h11V0H7v2zm16.757 10.15l-2.498-3.024-1.542 1.274 2.498 3.023 1.542-1.274zm-2.498-3.024a3.5 3.5 0 00-5.17-.25l1.413 1.417a1.5 1.5 0 012.215.107l1.542-1.274zm-5.17-.25l-1.94 1.934 1.412 1.417 1.94-1.934-1.411-1.416zm-1.94 1.934a2.5 2.5 0 01-3.047.375l-1.027 1.717a4.5 4.5 0 005.486-.675l-1.412-1.417zm-3.047.375L9.284 10.1l-1.026 1.716 1.817 1.087 1.027-1.717zM9.284 10.1a3.5 3.5 0 00-3.357-.129l.892 1.79a1.5 1.5 0 011.439.055L9.284 10.1zM5.927 9.97l-4.335 2.16.892 1.79 4.335-2.16-.892-1.79zM7 16.406a4 4 0 01-3.97-3.503l-1.985.245A6 6 0 007 18.406v-2zm11 0H7v2h11v-2zm3.989-3.695A4 4 0 0118 16.406v2a6 6 0 005.983-5.545l-1.994-.15z"
        fill="#66023C"
        mask="url(#a)"
      />
      <Circle cx={16.4375} cy={4.28125} r={1.96875} fill="#66023C" />
    </Svg>
  )
}

export default PictureIcon
