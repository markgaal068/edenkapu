import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center rounded-md bg-brown-400 px-4 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-brown-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-400"
    >
      {pending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        'Rendelés leadása'
      )}
    </button>
  )
}

export default SubmitButton
