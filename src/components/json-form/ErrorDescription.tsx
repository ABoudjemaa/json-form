interface ErrorDescriptionProps {
    error: string;
    errorCode?: string;
    details?: string;
    className?: string;
    showIcon?: boolean;
}

function ErrorDescription({ 
    error, 
    errorCode, 
    details, 
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
                    <svg 
                        className="w-5 h-5 mr-2 text-red-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                )}
                <h3 className="text-sm font-medium text-red-800">
                    {error}
                    {errorCode && (
                        <span className="ml-2 text-xs text-red-600">({errorCode})</span>
                    )}
                </h3>
            </div>
            {details && (
                <div className="mt-2 text-sm text-red-700">
                    {details}
                </div>
            )}
        </div>
    );
}

export default ErrorDescription;