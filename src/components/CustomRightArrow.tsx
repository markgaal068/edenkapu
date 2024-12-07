import { ChevronRightIcon } from '@heroicons/react/24/solid'

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[calc(50%-2rem)] -translate-y-1/2 rounded-full bg-brown-400 p-2 shadow-lg transition-colors hover:bg-brown-300 sm:p-3"
      aria-label="Next slide"
    >
      <ChevronRightIcon className="size-6 text-white sm:size-7" />
    </button>
  )
}

export default CustomRightArrow
