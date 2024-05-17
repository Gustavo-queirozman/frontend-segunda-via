import React from "react";
import Header from "../../components/Header/Index";

function ModificarSenha() {
    return (
        <div className="min-h-screen  bg-white flex ">
            <div className="flex-1 p-4">
                <Header />

                <div className="mt-2">
                    <form>

                        <div className="mt-8 mx-24">
                            <label className="text-cinza text-sm">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <div className="mt-8 mx-24">
                            <label className="text-cinza text-sm">Confirmar senha:</label>
                            <input
                                type="password"
                                name="c_password"
                                placeholder=""
                                className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}

                            />
                        </div>


                        <div className="mt-11 mx-24">
                            <button className="bg-secundaria text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
                                onClick={(e) => handleSubmit(e)}>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div
                className="hidden sm:block relative flex-1 p-4 bg-cover bg-[url('capa.jpg')]"
            ></div>
        </div>
    );
}

export default ModificarSenha;