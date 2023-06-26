import { useController } from "react-hook-form";

export default function ToggleSwitch({ name, control, children, required, disabled, defaultValue = false }) {
  const {
    field: { name: fieldName, ref, ...rest },
  } = useController({
    name,
    control,
    rules: { required },
    shouldUnregister: true,
  });
  return (
    <label className="flex items-center gap-4 py-2 px-[30px]">
      <input
        {...rest}
        ref={ref}
        type="checkbox"
        className="opacity-0 hidden peer"
        name={name}
        disabled={disabled}
        defaultChecked={defaultValue}
      />
      <p className="text-white w-full">{children}</p>
      <span className="cursor-pointer w-[72px] h-3.5 rounded-2xl bg-white/40 flex items-center transition-all duration-300 peer-checked:bg-[#FCDC9D] before:content-[''] before:w-[20px] before:h-[20px] before:bg-[#C4C4C4] before:rounded-full before:peer-checked:translate-x-[55px] before:peer-checked:bg-orange before:transition-all before:duration-300 shrink-0" />
    </label>
  );
}
