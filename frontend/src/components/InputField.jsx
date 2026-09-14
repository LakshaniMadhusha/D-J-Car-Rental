export default function InputField({
  icon: Icon,
  label,
  type = "text",
  rightElement,
  ...props
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink-900">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={18}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-ink-500
          "
        />

        <input
          type={type}
          className={`field ${rightElement ? "pr-12" : ""}`}
          {...props}
        />

        {rightElement}
      </div>
    </label>
  );
}