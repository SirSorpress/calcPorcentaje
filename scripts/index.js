//document.addEventListener()
window.onload = function(){
    //let porcentajeValue = 0;

    const btn5 = document.getElementById("btn5");
    const btn10 = document.getElementById("btn10");
    const btn21 = document.getElementById("btn21");
    const btnCalc = document.getElementById("btnCalc");

    const importeInput = document.getElementById("importeInput");
    const otrosSelect = document.getElementById("otrosSelect");

    const vPShow = document.getElementById("vPShow");
    const OShow = document.getElementById("OShow");
    const plusShow = document.getElementById("plusShow");

    function calac(){
        const porcentajeValue = Number(otrosSelect.value);
        const importe = Number(importeInput.value);

        const resultPorcentaje =  (porcentajeValue * importe) /100;

        vPShow.innerHTML = resultPorcentaje;
        OShow.innerHTML = importe;
        plusShow.innerHTML = importe + resultPorcentaje;
    }

    btn5.addEventListener("click",function(){
        otrosSelect.value = 5;
    })

    btn10.addEventListener("click",function(){
        otrosSelect.value = 10;
    })

    btn21.addEventListener("click",function(){
        otrosSelect.value = 21;
    })

    btnCalc.addEventListener("click",function(){
        calac();
    })

} 