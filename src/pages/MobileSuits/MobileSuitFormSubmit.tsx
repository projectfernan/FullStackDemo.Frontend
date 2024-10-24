import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { IMobileSuitForm } from '@IMobileSuits/IMobileSuits';

const MobileSuitFormSubmit = (props: IMobileSuitForm) => {
    const { register, formState: { errors }, setValue } = useFormContext();

    useEffect(() => {
        setValue('ModelCode', props.ModelCode);
        setValue('ModelName', props.ModelName);
        setValue('OperatingSystem', props.OperatingSystem);
        setValue('PowerOutput', props.PowerOutput);
        setValue('Armor', props.Armor);
        setValue('Height', props.Height);
        setValue('Weight', props.Weight);
        setValue('Manufacturer', props.Manufacturer);
    },[props]);

    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Model Code : </label>
                        <input type="text" className="form-control"
                            {...register("ModelCode", { required: "Model code is required" })} />
                        {errors.ModelCode && (
                            <span className="text-danger">
                                {errors.ModelCode.message as string}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Model Name : </label>
                        <input type="text" className="form-control"
                            {...register("ModelName", { required: "Model name is required" })} />
                            {errors.ModelName && (
                                <span className="text-danger">
                                {typeof errors.ModelName.message === 'string' && errors.ModelName.message}
                                </span>
                            )}
                    </div>

                    <div className="form-group">
                        <label>Operating System : </label>
                        <input type="text" className="form-control"
                            {...register("OperatingSystem", { required: "Operating System is required" })} />
                            {errors.OperatingSystem && (
                                <span className="text-danger">
                                {typeof errors.OperatingSystem.message === 'string' && errors.OperatingSystem.message}
                                </span>
                            )}
                    </div>

                    <div className="form-group">
                        <label>Power Output : </label>
                        <input type="text" className="form-control"
                            {...register("PowerOutput", { required: "Power output is required" })} />
                            {errors.PowerOutput && (
                                <span className="text-danger">
                                {typeof errors.PowerOutput.message === 'string' && errors.PowerOutput.message}
                                </span>
                            )}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                            <label>Armor : </label>
                            <input type="text" className="form-control"
                                {...register("Armor", { required: "Armor is required" })} />
                                {errors.Armor && (
                                    <span className="text-danger">
                                    {typeof errors.Armor.message === 'string' && errors.Armor.message}
                                    </span>
                                )}
                    </div>

                    <div className="form-group">
                        <label>Height : </label>
                        <input type="text" className="form-control"
                            {...register("Height", { required: "Height is required" })} />
                            {errors.Height && (
                                <span className="text-danger">
                                {typeof errors.Height.message === 'string' && errors.Height.message}
                                </span>
                            )}
                    </div>

                    <div className="form-group">
                        <label>Weight : </label>
                        <input type="text" className="form-control"
                            {...register("Weight", { required: "Weight is required" })} />
                            {errors.Weight && (
                                <span className="text-danger">
                                {typeof errors.Weight.message === 'string' && errors.Weight.message}
                                </span>
                            )}
                    </div>

                    <div className="form-group">
                        <label>Manufacturer : </label>
                        <input type="text" className="form-control"
                            {...register("Manufacturer", { required: "Manufacturer is required" })} />
                            {errors.Manufacturer && (
                                <span className="text-danger">
                                {typeof errors.Manufacturer.message === 'string' && errors.Manufacturer.message}
                                </span>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileSuitFormSubmit