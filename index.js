var frases=["Ay:(","Estas segura?","Piensalo otra vez","Me romperas el corazon","Por favor","No me hagas esto","No es opcional;)"]
let con=0
var letras = "Quieres ser mi rukaleta",
        oracion = ""
        letras=letras.split(""),
        c=0
        var no = document.getElementById('no')
        function agregar() {
            if (letras.length==oracion.length) {
                oracion=''
                c=0
            }
            oracion=oracion+letras[c]
            c++
            document.getElementById('d1').innerHTML=oracion
        }
        setInterval(() => {
            agregar()
        }, 500);
        function mover() {
            if (con==frases.length) {
                document.getElementById('no').style.display='none'
                
            }
            let top = numero(280),
            left = numero(490)
            no.style.top=top+'px'
            no.style.left=left+'px'
            no.value=frases[con]
            con++
        }
        function numero(max) {
        let masmenos=Math.round(Math.random())
        if (!masmenos) {
        max = -50
        }
            var re = Math.round(Math.random()*max);
            //console.log(re);
            return re
        }