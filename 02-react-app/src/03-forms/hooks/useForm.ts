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

    return {
        //properties
        ...formData,
        //methods
        onChange,
    };
};
