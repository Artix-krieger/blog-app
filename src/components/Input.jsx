import {useId, forwardRef} from "react";

export const Input = forwardRef(function Input({
                                                         label,
                                                         type = "text",
                                                         name,
                                                         className = "",
                                                         ...props
                                                     }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label
                className="inline-block mb-1 pl-1 text-sm font-medium leading-6 text-gray-900"
                htmlFor={id}
            >
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 bg-white outline-none focus:bg-gray-50 duration-200 border-gray-200 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
                ref={ref}
                {...props}
                id={id}
                name={name}
            />
        </div>
    )
})