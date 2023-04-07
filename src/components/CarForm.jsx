import Input from "./Input"
import Button from "./Button"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseMake, chooseModel, chooseColor, chooseYear } from '../redux/slices/RootSlice'

const CarForm = (props) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data, event) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.title } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseColor(data.color));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

    return (
    <div className="form-container">
        <h2>Add a Car</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div> 
                <label htmlFor="make">Make</label>
                <Input placeholder='Make' name='make' {...register('make')} />
            </div>
            <div> 
                <label htmlFor="model">Model</label>
                <Input placeholder='Model' name='model' {...register('model')} />
            </div>
            <div> 
                <label htmlFor="color">Color</label>
                <Input placeholder='Color' name='color' {...register('color')} />
            </div>
            <div> 
                <label htmlFor="year">Year</label>
                <Input placeholder='Year' name='year' {...register('year')} />
            </div>
            <div className="button-container">
                <Button
                    className="submit-button">
                    Submit
                </Button>
            </div>
        </form> 
    </div>
    )
};

export default CarForm