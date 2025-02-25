class miElemento extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `

        <img class="img-logo" src="https://www.mitur.gob.sv/wp-content/uploads/2020/09/El-Salvador.jpg" alt="El Salvador" width="100%">
"
            <h1>Mejores lugares para visitar</h1>

            <style>
                h1 {
                    font-size: 50px;
                    font-family: Arial;
                    text-align: center;

                }
                .img-logo {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                }
        `;
        
    }
}
customElements.define("mi-elemento", miElemento);

function volcan(){
    document.getElementById("bt1").innerHTML="El Ilamatepec forma parte del Complejo Los Volcanes en la cordillera de Apaneca y su ascenso no es muy complicado. Una vez arriba podrás ver el cráter o disfrutar de las vistas al lago Coatepeque. El recorrido también se puede hacer en la noche con total seguridad.";
  }



function coate(){
    document.getElementById("bt2").innerHTML="Sus aguas azules y su alta oferta de ecoturismo hacen del lago de Coatepeque uno de los destinos preferidos por salvadoreños y extranjeros. En este lago de origen volcánico podrás practicar kayak, jet ski y buceo, y en sus alrededores senderismo o bicicleta de montaña.";
  }


function binaes(){
    document.getElementById("bt3").innerHTML="Tesoro resplandeciente ubicado en el Centro Histórico de San Salvador..";
  }


function surfCity(){
    document.getElementById("bt4").innerHTML="El lugar de las mejores olas derechas del mundo. Un paraíso natural que debes conocer.";
  }

document.getElementById('btnVer').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f0e68c';
});

  document.getElementById('btnVer').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
});

