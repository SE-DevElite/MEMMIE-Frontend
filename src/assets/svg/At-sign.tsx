import * as React from 'react'
import Svg, { Path, SvgProps as OriginalSvgProps } from 'react-native-svg'

interface SvgProps extends OriginalSvgProps {
  fill?: string
  width?: number
  height?: number
  xmlns?: string
}

interface SvgComponentProps extends SvgProps {}

const AtSign: React.FC<SvgComponentProps> = props => {
  const { fill, width, height, xmlns } = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      {...props}>
      <Path
        d="M2445 5054c-881-51-1644-528-2062-1289-193-350-290-711-300-1115-7-281 15-482 83-726 244-891 941-1566 1839-1779 196-47 314-60 560-60 301 0 491 29 760 115 184 59 427 173 533 249 156 114 106 371-82 422-71 19-122 6-276-74-219-114-391-171-635-214-139-23-471-23-610 0-439 76-798 259-1106 566-769 766-784 2005-35 2789 537 562 1337 763 2071 521 308-102 579-272 805-505 167-173 270-319 370-526 207-430 254-910 134-1374-37-146-61-199-115-259-183-200-519-124-600 136-18 58-19 102-19 841 0 584-3 791-12 822-26 86-136 166-228 166-115 0-240-116-240-223 0-13-18-5-71 29-296 192-674 244-1009 138-190-59-339-151-486-298-163-162-262-335-322-559-25-94-27-116-26-292 0-172 3-199 26-285 151-559 652-933 1213-906 274 13 513 105 731 281l31 25 38-64c84-144 251-285 408-346 202-79 427-77 629 4 184 75 346 231 432 418 57 123 118 359 148 568 17 122 17 505 0 625-70 488-241 892-533 1254-397 495-993 828-1614 905-129 16-333 25-430 20zm247-1788c102-20 175-49 260-105 101-66 196-172 247-274 61-124 76-190 75-337-1-107-5-137-27-205-38-115-90-198-182-290s-175-144-290-182c-68-22-98-26-205-27-147-1-213 14-337 75-145 72-287 228-343 377-77 204-59 439 47 622 47 80 178 213 256 259 152 89 328 120 499 87z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  )
}

export default AtSign
