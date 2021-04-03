var letras = "Quieres",
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
            
            let top = numero(280),
            left = numero(490)
            no.style.top=top+'px'
            no.style.left=left+'px'
        }
        function numero(max) {
        let masmenos=Math.round(Math.random())
        if (!masmenos) {
        max = -50
        }
            var re = Math.round(Math.random()*max);
            console.log(re);
            return re
        }