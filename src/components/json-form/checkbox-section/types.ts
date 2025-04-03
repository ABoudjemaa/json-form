export interface SchemaType {
    title: string;
    items: {
        enum: string[];
    };
}

export interface CheckboxItemProps {
    option: string;
    checked: boolean;
    onChange: (value: string) => void;
}