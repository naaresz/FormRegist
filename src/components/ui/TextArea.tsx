interface TextAreaProps {
    label:string;
    name:string;
    register:any;
    error?:string;
    placeholder?:string;
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    name,
    register,
    error,
    placeholder
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <textarea 
            {...register(name)}
            maxLength={100}
            placeholder={placeholder}
            className="border rounded-2xl px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-red-900"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};