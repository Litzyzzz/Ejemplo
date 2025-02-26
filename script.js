class miElemento extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `

        <img class="img-logo" src="https://www.mitur.gob.sv/wp-content/uploads/2020/09/El-Salvador.jpg" alt="El Salvador" width="100%">

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
    document.getElementById("bt1").innerHTML="El Lago de Ilamatepec, ubicado en el cráter del Volcán de Santa Ana, es un espectáculo natural impresionante. Su color verde esmeralda y el vapor que emana de sus aguas dan la sensación de estar en otro planeta. La caminata hasta la cima del volcán es una experiencia única, con senderos rodeados de flora y fauna autóctona. Desde la cumbre, se pueden observar vistas espectaculares del Lago de Coatepeque y el océano Pacífico.";
  }

document.getElementById('btnVer1').addEventListener('mouseover', function() {
  this.style.backgroundColor = "#359dce";
});

document.getElementById('btnVer1',).addEventListener('mouseout', function() {
  this.style.backgroundColor = '#fff';
});


function coate(){
    document.getElementById("bt2").innerHTML="Ubicado en el departamento de Santa Ana, el lago Coatepeque es un impresionante cuerpo de agua de origen volcánico. Su color azul intenso y la tranquilidad de sus aguas lo convierten en un destino ideal para relajarse y practicar deportes acuáticos. Desde sus miradores, se puede disfrutar de una vista panorámica espectacular, y en ciertas épocas del año, sus aguas adquieren un tono turquesa único.";
  }

document.getElementById('btnVer2').addEventListener('mouseover', function() {
  this.style.backgroundColor = "#359dce";
});

document.getElementById('btnVer2',).addEventListener('mouseout', function() {
  this.style.backgroundColor = '#fff';
});

function binaes(){
    document.getElementById("bt3").innerHTML="La Biblioteca Nacional de El Salvador (BINAES) es un espacio moderno dedicado al conocimiento y la cultura. Ubicada en San Salvador, ofrece acceso gratuito a miles de libros y recursos digitales. Su diseño innovador y áreas interactivas la convierten en un punto de encuentro para estudiantes, investigadores y amantes de la lectura. Además, cuenta con salas de estudio, actividades culturales y tecnología de vanguardia para el aprendizaje.";
  }

document.getElementById('btnVer3').addEventListener('mouseover', function() {
  this.style.backgroundColor = "#359dce";
});

document.getElementById('btnVer3',).addEventListener('mouseout', function() {
  this.style.backgroundColor = '#fff';
});


function surfCity(){
    document.getElementById("bt4").innerHTML="Situado en la costa del océano Pacífico, Surf City es el paraíso para los amantes del surf. Sus playas, como El Tunco y El Zonte, ofrecen olas perfectas durante todo el año. Además del surf, la zona cuenta con una vibrante vida nocturna, restaurantes frente al mar y una impresionante puesta de sol. Tanto principiantes como expertos pueden disfrutar de esta experiencia única en un destino reconocido a nivel mundial.";
  }

document.getElementById('btnVer').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#359dce";
});

  document.getElementById('btnVer',).addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
});
