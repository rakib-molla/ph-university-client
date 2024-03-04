import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type PHSelectProps = {
   label: string;
   name: string;
   options: {value: string; label: string; disabled?: boolean}[] | undefined;
   disabled: boolean;
   mode?: "multiple" | undefined;
}

const PHSelect = ({ label, name,options ,disabled, mode}: PHSelectProps) => {
  return (
    <Controller
    name={name}
    render={({field, fieldState: {error}})=>(
      <Form.Item label={label}>
      <Select
      mode={mode}
      {...field}
        style={{ width: "100%" }}
        options={options}
      size="large"
      disabled={disabled}
      />
      {error && <small style={{color:'red'}}>{error.message}</small>}
    </Form.Item>
    )}
    />
  );
};

export default PHSelect;
