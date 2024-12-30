export const FormOptionField = ({
    className = "",
    children,
    label,
    ...props
}) => {
    return (
        <option {...props} className={className}>
            {label ? label : children}
        </option>
    );
};
