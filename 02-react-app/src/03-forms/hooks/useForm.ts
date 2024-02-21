import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialState: T ) => {

    const [formData, setFormData] = useState(initialState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        // o asi
        // setRegisterData( prev => ({
        //     ...prev,
        //     [event.target.name]: event.target.value
        // }));
    };

    const onResetForm = () => {
        setFormData({...initialState});
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        //properties
        ...formData,
        //methods
        isValidEmail,
        onChange,
        onResetForm,
        isValidEmail
    };
};
