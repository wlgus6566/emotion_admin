import AuthLayout from "@/layouts/auth";
import FormInput from "@/components/global/form-input";
import Button from "@/components/global/button";
import {useState} from "react";
//import axios from "axios";
import {router} from "next/client";
const cookies = new Cookies();//쿠키 사용을 위해 선언
export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleFormChange = (val, name) => {
        setUser({...user, [name]: val})
        //console.log(axios)
     /*   axios
            .post("/api/login", user)
            .then((response) => {
                console.log(response)
                const { accessToken } = response.data;
                cookies.set("LoginToken", accessToken, {
                    path: "/",
                    secure: true,
                    sameSite: "none",
                });

                router.replace("/comment");
            })*/
          /*  .catch((error) => {
                alert("아이디 또는 비밀번호를 확인해주세요.");
            });*/

    };
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
                            <FormInput
                                name="ID"
                                //value= {user.id}
                                onChange={(val) => handleFormChange(val, 'id')}
                                value="emotion"
                                label="ID"
                                type="text"
                            />
                            <div className="mt-5">
                                <FormInput
                                    name="Password"
                                    //value= {user.password}
                                    onChange={(val) => handleFormChange(val, 'password')}
                                    value="2-motion"
                                    label="Password"
                                    type="password"/>

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


