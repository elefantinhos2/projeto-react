import {useEffect, useState} from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../service/api";
import * as yup from "yup";
import "./style.css"

function Form({listAmounts, setListAmounts}) {
    
    useEffect(() => {
        handlePostAmount();
      },);
    
    const [amount, setAmount]                = useState(0);
    const [installments, setInstallments]    = useState(0);
    const [mdr, setMdr]                      = useState(0);

    const formSchema = yup.object().shape({
        amount: yup
            .number()
            .typeError("Deve ser um Numero")
            .required("Campo Obrigatório")
            .positive()
            .integer()
            .min(1000),
        installments: yup
            .number()
            .typeError("Deve ser um Numero")
            .required("Campo Obrigatório")
            .positive()
            .integer()
            .max(12),
        mdr: yup
            .number()
            .typeError("Deve ser um Numero")
            .required("Campo Obrigatório")
            .positive()
            .integer(),
    });

    const {register, handleSubmit, resetField, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });
 
    const onRegister = (data) => {

        const objetoData = 
        {
            amount: data.amount,
            installments: data.installments,
            mdr: data.mdr,
            days: [30, 60, 90]
        }

        handlePostAmount(data)

        resetField("amount")
        resetField("installments")
        resetField("mdr")
        
    };

    const handlePostAmount = (data) => {
        api.post("", data)
        .then((response) => {

            setListAmounts(response.data);
        })
        .catch((err) => {

        })
    }
    
    return (
        <form className="signupFormAmount" onSubmit={handleSubmit(onRegister)}>
            <h1>Simule sua Antecipação</h1>
            <div>
                <label>Informe o valor da  venda</label>
                <input type="text" placeholder="R$:" {...register("amount")}/>
            {errors.amount && <span>{errors.amount.message}</span>}
            </div>
            <div>
                <label>Em quantas parcelas</label>
                <input type="text" {...register("installments")}/>
            {errors.installments && <span>{errors.installments.message}</span>}
            </div>
            <div>
                <label>Informe o percentual de MDR</label>
                <input type="text" {...register("mdr")}/>
            {errors.mdr && <span>{errors.mdr.message}</span>}
            </div>
            <button type="submit">Calcular</button>
        </form>
    )
}

export default Form