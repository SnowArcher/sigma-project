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
        <div className="sing-up" id='contact'>
            <div className="sing-up__content">
                <div className="sing-up__title">
                    <h1>DON’T FORGET TO SIGN UP<span></span></h1>
                    <p>Find out early about all upcoming promotions and new product releases with<br/>our newsletter.</p>
                </div>
                <form className="sing-up__form" action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="sing-up__form_name">
                        <input 
                            {...register("firstName", {
                                required: "First name is required",
                                pattern: {
                                    value: /^[A-Z][a-z]*$/,
                                    message: "Invalid first name"
                                }
                            })}
                            type="text" 
                            className={`${errors.firstName? 'first-name error' : 'first-name'}`} 
                            placeholder="Enter your name....."
                        >
                        </input>
                        <input
                            {...register("lastName", {
                                required: "Last name is required",
                                pattern: {
                                    value: /^[A-Z][a-z]*$/,
                                    message: "Invalid last name"
                                }
                            })} 
                            type="text" 
                            className={`${errors.lastName? 'last-name error' : 'last-name'}`} 
                            placeholder="Enter your surname....."
                        ></input>
                    </div>
                    <div className="name-errors">
                        <p>{errors?.firstName?.message}</p>
                        <p>{errors?.lastName?.message}</p>
                    </div>
                    <input 
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="text" 
                        className={`${errors.email? 'sign-up__form_email error' : 'sign-up__form_email'}`} 
                        placeholder="Enter your email....."
                    ></input>
                    <div className="email-error">
                        <p>{errors?.email?.message}</p>
                    </div>
                    <button type="submit" disabled={!isValid}>Subscribe</button>
                </form>
            </div>
        </div>
    )
}