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

        // 에러 체크 변수
        let checkError = false;

        // 변경된 스테이트 값
        this.setState({ isInputError: checkError, value: e.target.value });

        // 상위 컴포넌트 콜백 함수 실행
        onChange(name, e.target.value);
    }
    handleFocus(e) {
        const { name, onFocus } = this.props;
        if (this.state.isFirstFocus === false) {
            this.setState({ isFirstFocus: true });
        }
        onFocus(name, e.target.value);
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }

    render() {
        // 프로퍼티 받아서 화면 출력
        const { label, name, type, errorMessage,disabled,placeholder } = this.props;
        return (
            <div>
                <label htmlFor={`input_${name}`}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
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
    autoFocus: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

FormInput.defaultProps = {
    value: "",
    type: "text",
    disabled: false,
    autoFocus: true,
    onChange: () => {},
    onFocus: () => {},
};

export default FormInput;