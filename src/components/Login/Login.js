import { useForm ,Controller} from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Reducer/AppContext';
import './login.css';
const Login = () => {
    const {state:{loader},dispatch} = useContext(AppContext);
    const [formData, setFormData] = useState({});
    const defaultValues = {
        firstName : "",
        email: "",
    };
    const { control,register, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data) => {
        setFormData(data);
        dispatch({
            type:"LOAD_RATES"
        })

        reset();
    };
       


    return (
        <div className='center'>
            <h1>Exchange Rates</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputbox">
                    <input type="text" {...register("firstName",{required:true})}/>
                    <span >First Name*</span>
                </div>
                {errors.firstName && <p>Please check the First Name</p>}
                <div className="inputbox">
                    <input type="text" {...register("email",{required:true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}/>
                    <span>Email</span>
                </div>
                <div>{errors.email && <p>Please check the Email</p>}</div>
                
                <div className="inputbox">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
        
    )
}
export default Login;