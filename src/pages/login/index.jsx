import Link from "next/link";
import AuthLayout from "@/layouts/auth";
import FormInput from "@/components/global/form-input";
import Button from "@/components/global/button";
export default function Login() {
    return (
        <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen min-w-full overflow-hidden">
            <div className="flex flex-col flex-column items-center justify-center w-3/12" style={{ minWidth: '400px'}}>
                    <div className="w-full" style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, #ee2c3c 10%, rgba(33, 150, 243, 0) 30%)' }}>
                        <div className="bg-white w-full py-20 px-16" style={{ borderRadius: '56px'}}>
                            <div className="text-center mb-5">
                                <img
                                    className="w-32 h-auto inline"
                                    src="/logo_red.svg"
                                    alt="company logo"
                                />
                            </div>
                            <div className="mt-12">
                                <FormInput name="Email" label="Email" type="email"/>
                                <div className="mt-5">
                                    <FormInput name="Password" label="Password" type="password"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6 relative">
                                <Button name="Log In" size="lg"/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

Login.layout = AuthLayout;


