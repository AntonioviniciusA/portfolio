import React from "react-router-dom";

const licenca = () => {
  return (
    <div id="licenca" class="licenca">
      <div class="licenca-content">
        <div class="licenca-header">Contrato de licenca</div>
        <div class="licenca-body">
          <p>
            Leia e aceite os termos do{" "}
            <button onclick=""> contrato de licença </button> para continuar
            usando este site.
          </p>
        </div>
        <div class="licenca-footer">
          <button class="btnmodal" onclick="aceitarlicenca()">
            Aceita
          </button>
        </div>
      </div>
    </div>
  );
};
export default licenca;
