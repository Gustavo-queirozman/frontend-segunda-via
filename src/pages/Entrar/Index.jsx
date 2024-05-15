import React from "react";
import FormField from "../../components/FormField/Index";
import Button from "../../components/Button/Index";

function Entrar() {
    return (
        <div>
            <FormField
                label="Cnp"
                type="text"
                name="cnp"
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
            
            <Button
                value="Enviar"
                className="flex items-center"
            />
        </div>
    );
}
export default Entrar;