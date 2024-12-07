import { ChevronLeftIcon } from '@heroicons/react/24/solid'

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-[calc(50%-2rem)] -translate-y-1/2 rounded-full bg-brown-400 p-2 shadow-lg transition-colors hover:bg-brown-300 sm:p-3"
      aria-label="Previous slide"
    >
      <ChevronLeftIcon className="size-6 text-white sm:size-7" />
    </button>
  )
}

export default CustomLeftArrow
