import React from "react";
import FormField from "../../components/FormField/Index";

function Cadastrar(props) {
    return (
        <div>
            <FormField
                label="Cnp"
                type="cnp"
                name="cnp"
                placeholder=""
                onChange=""
                value=""
            />

            <FormField
                label="Email"
                type="email"
                name="email"
                placeholder=""
                onChange=""
                value=""
            />

            <FormField
                label="Senha"
                type="password"
                name="password"
                placeholder=""
                onChange=""
                value=""
            />

            <FormField
                label="Confirmar senha"
                type="text"
                name="c_password"
                placeholder=""
                onChange=""
                value=""
            />
        </div>
    );
}

export default Cadastrar;