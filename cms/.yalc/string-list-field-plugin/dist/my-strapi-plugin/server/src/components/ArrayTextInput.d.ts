import React from 'react';
interface ArrayTextInputProps {
    name: string;
    value?: string[];
    onChange: (e: {
        target: {
            name: string;
            value: string[];
        };
    }) => void;
}
declare const ArrayTextInput: React.FC<ArrayTextInputProps>;
export default ArrayTextInput;
