import {ArrowPathIcon} from '@heroicons/react/24/solid'

export const Loader = ({message = 'Loading...'}) => {
    return <div className="flex bg-opacity-90 items-center justify-center bg-white fixed top-0 left-0 w-screen h-screen z-10">
        <ArrowPathIcon className='h-6 w-6 text-gray-800 animate-spin mr-2'/>
        <span>{message}</span>
    </div>
}