const CheckboxGroupContainer = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {title}
        </label>
        <div className="space-y-2">{children}</div>
    </div>
);

export default CheckboxGroupContainer;