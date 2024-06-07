import RNPickerSelect from 'react-native-picker-select';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
  selectedItem: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  onChange,
  selectedItem,
  disabled,
}) => {
  return (
    <RNPickerSelect
      onValueChange={value => onChange(value)}
      disabled={disabled}
      value={selectedItem}
      style={{
        inputAndroid: {
          backgroundColor: 'rgba(34, 164, 250, 0.904)',
          color: 'white',
        },
        iconContainer: {
          top: 5,
          right: 15,
        },
      }}
      items={items}
    />
  );
};
