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


function surfCity(){
    document.getElementById("bt4").innerHTML="El lugar de las mejores olas derechas del mundo. Un paraíso natural que debes conocer.";
  }

document.getElementById('btnVer').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f0e68c';
});

  document.getElementById('btnVer').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
});

