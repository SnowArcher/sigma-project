import {useForm} from "react-hook-form";

export function SingUp() {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div className="sing-up">
            <div className="sing-up__content">
                <div className="sing-up__title">
                    <h1>DON’T FORGET TO SIGN UP<span></span></h1>
                    <p>Find out early about all upcoming promotions and new product releases with<br/>our newsletter.</p>
                </div>
                <form className="sing-up__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="sing-up__form_name">
                        <input 
                            {...register("first-name", {
                                required: "Поле має бути заповненим"
                            })}
                            type="text" 
                            className="first-name" 
                            placeholder="Enter your name....."
                        ></input>
                        <input
                            {...register("last-name", {
                                required: "Поле має бути заповненим"
                            })} 
                            type="text" 
                            className="last-name" 
                            placeholder="Enter your surname....."
                        ></input>
                    </div>
                    <input 
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="text" 
                        className="sign-up__form_email" 
                        placeholder="Enter your e-mail....."
                    ></input>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    )
}