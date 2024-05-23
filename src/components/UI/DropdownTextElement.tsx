import React from "react";
import { Select } from "antd";


const { Option } = Select;

interface DropdownTextElementProps {
    label: string;
    defaultValue: string;
    options: { value: string; label: string }[];
    style?: React.CSSProperties;
}

const DropdownTextElement: React.FC<DropdownTextElementProps> = ({
    label,
    defaultValue,
    options,
    style,
}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: '60px' }}>
            <span className='whiteText'>{label}</span>
            <Select direction="rtl"
                defaultValue={defaultValue}
                style={{
                    borderRadius: "20px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    marginTop: "10px",
                    ...style,
                }}
                dropdownStyle={{ borderRadius: "10px" }}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default DropdownTextElement;
