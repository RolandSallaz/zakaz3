import React from 'react';
import { Textarea } from '@strapi/design-system';

interface ArrayTextInputProps {
  name: string;
  value?: string[];
  onChange: (e: { target: { name: string; value: string[] } }) => void;
}

const ArrayTextInput: React.FC<ArrayTextInputProps> = ({ name, value = [], onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    const lines = value.split('\n').filter((line) => line.trim() !== '');
    onChange({ target: { name, value: lines } });
  };

  return (
    <Textarea
      name={name}
      value={value.join('\n')}
      onChange={handleChange}
    />
  );
};

export default ArrayTextInput;
