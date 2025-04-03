import ErrorIcon from "../../assets/error-icon.svg";

interface ErrorDescriptionProps {
    error: string;
    className?: string;
    showIcon?: boolean;
}

function ErrorDescription({
    error,
    className = "",
    showIcon = true
}: ErrorDescriptionProps) {
    return (
        <div
            className={`${className}`}
            role="alert"
            aria-live="assertive"
        >
            <div className="flex items-center">
                {showIcon && (
                    <img
                        src={ErrorIcon}
                        alt="Error icon"
                        className="w-5 h-5 mr-2" 
                        aria-hidden="true"
                    />
                )}
                <span className="text-sm font-medium text-red-500">
                    {error}
                </span>
            </div>
        </div>
    );
}

export default ErrorDescription;