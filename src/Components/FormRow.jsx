import PropTypes from 'prop-types';
const FormRow = ({ name, type, label, handleChange, classType }) => {
    return (
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>

            <input type={type} id="" className='"shadow-sm bg-gray-50 border border-gray-300  block w-full p-2.5" {classType}'
                placeholder={label} name={name} required onChange={(e) => handleChange(e)} />
        </div>
    )
}

FormRow.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classType:PropTypes.string,
    handleChange: PropTypes.func,
}

export default FormRow;