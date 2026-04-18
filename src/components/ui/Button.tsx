interface ButtonProps {
    label:string;
    type?:"button" | "submit";
    variant?:"primary" | "outline";
    isLoading?:boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    type = "button",
    variant = "primary",
    isLoading = false
}) => {
    const base = "px-4 py-2 rounded rounded-2xl font-medium";

    const styles = {
        primary: "bg-red-900 text-white",
        outline: "border border-red-900 text-red-600"
    };

    return (
        <button
        type={type}
        disabled={isLoading}
        className={`${base} ${styles[variant]} ${
            isLoading
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer"
        }`}
        >
            {isLoading ? "Loading...": label}

        </button>
    );
};