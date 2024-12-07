import classNames from 'classnames'
import { DotProps } from 'react-multi-carousel'

const CustomDot = ({ onClick, active }: DotProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={classNames({
          'bg-brown-400': active,
          'size-3 cursor-pointer rounded-full border-2 border-brown-400': true,
        })}
      />
    </li>
  )
}

export default CustomDot
