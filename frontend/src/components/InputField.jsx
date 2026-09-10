export default function InputField({
  icon: Icon,
  label,
  type = "text",
  ...props
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input type={type} className="field" {...props} />
      </div>
    </label>
  );
}
