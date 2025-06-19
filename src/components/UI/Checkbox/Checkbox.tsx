import { CheckIcon } from '@/assets/Icons';

interface CheckboxProps {
  id: string;
  label: string;
  name: string;
}
export default function Checkbox({ id, label, name }: CheckboxProps) {
  const checkboxStyles = {
    customCheckbox: `
        peer sr-only
      `,
    customCheckboxLabel: `
        customCheckboxLabel
        group
        flex items-center gap-2 cursor-pointer select-none text-sm
        
      `,
    customCheckboxBox: `
        customCheckboxBox
        w-[18px] h-[18px] border-2 border-[#8392A6] rounded transition-colors duration-200
        flex items-center justify-center
        peer-checked:bg-[#3A6150] peer-checked:border-[#3A6150]
        m-2
        group-focus-within:outline
      
      `,
    customCheckboxIcon: `
        customCheckboxIcon
        w-3 h-3 text-white
        opacity-0 transition-opacity duration-200
      `,
  };

  return (
    <label htmlFor={id} className={checkboxStyles.customCheckboxLabel}>
      <input
        type='checkbox'
        id={id}
        name={name}
        className={checkboxStyles.customCheckbox}
      />
      <span className={checkboxStyles.customCheckboxBox}>
        <CheckIcon />
      </span>
      {label}
    </label>
  );
}
