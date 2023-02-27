import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class FormTextarea extends PureComponent {
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
    setRef(ref) {
        this.ref = ref;
    }
    handleChange(e) {
        const { name, onChange } = this.props;
        let checkError = false;
        this.setState({ isInputError: checkError, value: e.target.value });

        // 상위 컴포넌트 콜백 함수 실행
        onChange(name, e.target.value);
    }

    handleFocus(e) {
        const { name, onFocus } = this.props;
        if (this.state.isFirstFocus === false) {
            this.setState({ isFirstFocus: true });
        }
        // 상위 컴포넌트 콜백 함수 실행
        onFocus(name, e.target.value);
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }
    render() {
        const { label, name, errorMessage,disabled, rows,placeholder } = this.props;
        return (
            <div>
                <label htmlFor={`input_${name}`}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id={`input_${name}`}
                    value={this.state.value}
                    ref={this.setRef}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    disabled={disabled}
                    rows={rows}
                    placeholder={placeholder}
                />
                {this.state.isInputError && errorMessage}
            </div>
        );
    }
}

FormTextarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoFocus: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
};

FormTextarea.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    autoFocus: false,
    rows: 8,
    onChange: () => {},
    onFocus: () => {},
};

export default FormTextarea;