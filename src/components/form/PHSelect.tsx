import { Form, Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const PHSelect = ({label}) => {
   return (
      <Form.Item label={label}> 
    <Select
     
      style={{ width: '100%' }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
   
   
  </Form.Item>
   );
};

export default PHSelect;