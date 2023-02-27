import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class FormInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value, // 상위 프로퍼티로 초기화
            isInputError: false, // 입력 오류가 있는지
            isFirstFocus: false, // 처음 입력창 포커스
        };

        // 콜백 함수 바인딩
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    // ref 프로퍼티 연결
    setRef(ref) {
        this.ref = ref;
    }

    // 입력창 변경 이벤트
    handleChange(e) {
        const { name, onChange } = this.props;
        console.log(
            `handleChange() name : ${name} , e.target.value : ${e.target.value}`
        );

        let checkError = false;

        this.setState({ isInputError: checkError, value: e.target.value });
        onChange(name, e.target.value);
    }
    handleFocus(e) {
        const { name, onFocus } = this.props;
        if (this.state.isFirstFocus === false) {
            this.setState({ isFirstFocus: true });
        }
        onFocus(name, e.target.value);
    }
    render() {
        const { label, name, type, errorMessage,disabled, placeholder,required } = this.props;
        return (
            <div>
                <label htmlFor={`input_${name}`}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                    <span className="text-primary ml-1">*</span>
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id={`input_${name}`}
                    value={this.state.value}
                    type={type}
                    ref={this.setRef}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    disabled={disabled}
                    placeholder={placeholder}
                    required={required}
                />
                {this.state.isInputError && errorMessage}
            </div>
        );
    }
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "number"]),
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

FormInput.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    onChange: () => {},
    onFocus: () => {},
};

export default FormInput;