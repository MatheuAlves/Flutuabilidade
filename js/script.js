
let elem = document.getElementById('simulator');
let fullScreen = document.getElementsByClassName('full-screen');
let minScreen = document.getElementsByClassName('min-screen');

let oInput = document.getElementById('o-input')
let oValue = document.getElementById('o-value')

let lInput = document.getElementById('l-input')
let lValue = document.getElementById('l-value')

// Object density

function updateOInput() {

    oValue.innerHTML = `${oInput.value / 100} `
    objectUpdate()
    submergedUpdate()

    yValues = [oInput.value / 100]
    xValues = [lInput.value / 100]

    document.getElementsByName('block')[0].style.fill = "#b9b9b9"
    document.getElementsByName('block')[1].style.fill = "#b9b9b9"
    document.getElementsByName('block')[2].style.fill = "#b9b9b9"

    renderChart(yValues, xValues)

}

// Fluid density

function updateLInput() {

    lValue.innerHTML = `${lInput.value / 100} `

    liquidUpdate()
    submergedUpdate()

    yValues = [oInput.value / 100]
    xValues = [lInput.value / 100]

    document.getElementsByName('water')[0].style.fill = "#d6d6d6"
    document.getElementsByName('water')[1].style.fill = "#d6d6d6"
    document.getElementsByName('water')[2].style.fill = "#d6d6d6"
    document.getElementsByName('water')[3].style.fill = "#d6d6d6"
    document.getElementsByName('water')[4].style.fill = "#d6d6d6"
    document.getElementsByName('water')[5].style.fill = "#d6d6d6"

    renderChart(yValues, xValues)

}

//Object related updates

function objectUpdate() {

    // Mass of object
    let mass = Math.floor(1000 * (oInput.value / 100));
    document.getElementById('mass-o-value').innerHTML = `${mass} g`

    //Weight of an Object

    let weight = Math.floor(mass * 9.8);
    document.getElementById('weight-o-value').innerHTML = `${weight} N`


}

//Liquid related updates

function liquidUpdate() {

    //Buoyant Force

    let buoyant = Math.floor(1000 * 9.8 * (lInput.value / 100))

    document.getElementById('buoyant-l-value').innerHTML = `${buoyant} N`


}

// Função para atualizar o gráfico
function updateChart() {
    yValues = [oInput.value / 100];
    xValues = [lInput.value / 100];
    renderChart(yValues, xValues);
}

//Submerged Update

function submergedUpdate() {

    let objectDensity = Math.floor(1000 * (oInput.value / 100));
    let liquidDensity = Math.floor(1000 * (lInput.value / 100));
    let submergedValue = Math.floor((objectDensity / liquidDensity) * 100);
    let submergedDistance = Math.ceil((objectDensity / liquidDensity) * 100 * 0.38);



    if (submergedValue < 100)
        document.getElementById('submerged-value').innerHTML = `${submergedValue} %`

    else
        document.getElementById('submerged-value').innerHTML = `100 %`


    

    document.getElementsByName('block')[0].style.transform = "translateY(-38px)"
    document.getElementsByName('block')[1].style.transform = "translateY(-38px)"
    document.getElementsByName('block')[2].style.transform = "translateY(-38px)"

    if (submergedDistance > 190) {
        document.getElementsByName('block')[0].style.transform = "translateY(" + 190 + "px)"
        document.getElementsByName('block')[1].style.transform = "translateY(" + 190 + "px)"
        document.getElementsByName('block')[2].style.transform = "translateY(" + 190 + "px)"
    }


    else if (submergedDistance < 25) {
        document.getElementsByName('block')[0].style.transform = "translateY(" + -(25 - submergedDistance) + "px)"
        document.getElementsByName('block')[1].style.transform = "translateY(" + -(25 - submergedDistance) + "px)"
        document.getElementsByName('block')[2].style.transform = "translateY(" + -(25 - submergedDistance) + "px)"
    }

    else {
        document.getElementsByName('block')[0].style.transform = "translateY(" + submergedDistance + "px)"
        document.getElementsByName('block')[1].style.transform = "translateY(" + submergedDistance + "px)"
        document.getElementsByName('block')[2].style.transform = "translateY(" + submergedDistance + "px)"
    }

}

// Object Density Dropdowns 
function oDropdown() {
    let oDensityDropdown = document.getElementsByClassName('o-density-dropdown')[0];

    // Verifica se o display não é 'none' antes de alternar
    if (getComputedStyle(oDensityDropdown).display !== 'none') {
        oDensityDropdown.style.display = 'none';
    } else {
        oDensityDropdown.style.display = 'inline-flex';
    }
}

// Fluid Density Dropdowns 
function lDropdown() {
    let lDensityDropdown = document.getElementsByClassName('l-density-dropdown')[0];

    // Verifica se o display não é 'none' antes de alternar
    if (getComputedStyle(lDensityDropdown).display !== 'none') {
        lDensityDropdown.style.display = 'none';
    } else {
        lDensityDropdown.style.display = 'inline-flex';
    }
}


///////////////////////////////////////////////Object Density all Dropdown Items///////////////////////////////

document.getElementById('o-drop1').addEventListener('click', () => {

    let sodiumValue = 0.50

    oInput.value = Math.floor(sodiumValue * 100)
    oValue.innerHTML = sodiumValue

    document.getElementsByName('block')[0].style.fill = "#723b02"
    document.getElementsByName('block')[1].style.fill = "#723b02"
    document.getElementsByName('block')[2].style.fill = "#bc7707"

    objectUpdate();
    submergedUpdate();
    updateChart()

})

document.getElementById('o-drop2').addEventListener('click', () => {

    let aluValue = 2.70

    oInput.value = Math.floor(aluValue * 100)
    oValue.innerHTML = aluValue

    document.getElementsByName('block')[0].style.fill = "#848789"
    document.getElementsByName('block')[1].style.fill = "#848789"
    document.getElementsByName('block')[2].style.fill = "#848789"

    objectUpdate();
    submergedUpdate();
    updateChart()

})

document.getElementById('o-drop3').addEventListener('click', () => {

    let ironValue = 7.87

    oInput.value = Math.floor(ironValue * 100)
    oValue.innerHTML = ironValue

    document.getElementsByName('block')[0].style.fill = "#434B4D"
    document.getElementsByName('block')[1].style.fill = "#434B4D"
    document.getElementsByName('block')[2].style.fill = "#434B4D"

    objectUpdate();
    submergedUpdate();
    updateChart()


})

document.getElementById('o-drop4').addEventListener('click', () => {

    let goldValue = 19.32

    oInput.value = Math.floor(goldValue * 100)
    oValue.innerHTML = goldValue

    document.getElementsByName('block')[0].style.fill = "#ffba1f"
    document.getElementsByName('block')[1].style.fill = "#ffba1f"
    document.getElementsByName('block')[2].style.fill = "#ffba1f"

    objectUpdate();
    submergedUpdate();
    updateChart()


})

////////////////////////////////////////////////Fluid Density all Dropdown Items/////////////////////////////////////

document.getElementById('l-drop1').addEventListener('click', () => {

    let waterValue = 0.10

    lInput.value = Math.floor(waterValue * 100)
    lValue.innerHTML = waterValue

    document.getElementsByName('water')[0].style.fill = "#A6E1FD"
    document.getElementsByName('water')[1].style.fill = "#A6E1FD"
    document.getElementsByName('water')[2].style.fill = "#A6E1FD"
    document.getElementsByName('water')[3].style.fill = "#A6E1FD"
    document.getElementsByName('water')[4].style.fill = "#A6E1FD"
    document.getElementsByName('water')[5].style.fill = "#A6E1FD"
    liquidUpdate();
    submergedUpdate();
    updateChart()


})

document.getElementById('l-drop2').addEventListener('click', () => {

    let keroValue = 0.80

    lInput.value = Math.floor(keroValue * 100)
    lValue.innerHTML = keroValue

    document.getElementsByName('water')[0].style.fill = "#E8EB67"
    document.getElementsByName('water')[1].style.fill = "#E8EB67"
    document.getElementsByName('water')[2].style.fill = "#E8EB67"
    document.getElementsByName('water')[3].style.fill = "#E8EB67"
    document.getElementsByName('water')[4].style.fill = "#E8EB67"
    document.getElementsByName('water')[5].style.fill = "#E8EB67"

    liquidUpdate();
    submergedUpdate();
    updateChart()


})

document.getElementById('l-drop3').addEventListener('click', () => {

    let galistanValue = 1.27

    lInput.value = Math.floor(galistanValue * 100)
    lValue.innerHTML = galistanValue

    document.getElementsByName('water')[0].style.fill = "red"
    document.getElementsByName('water')[1].style.fill = "red"
    document.getElementsByName('water')[2].style.fill = "red"
    document.getElementsByName('water')[3].style.fill = "red"
    document.getElementsByName('water')[4].style.fill = "red"
    document.getElementsByName('water')[5].style.fill = "red"

    liquidUpdate();
    submergedUpdate();
    updateChart()


})

document.getElementById('l-drop4').addEventListener('click', () => {

    let mercuryValue = 13.60

    lInput.value = Math.floor(mercuryValue * 100)
    lValue.innerHTML = mercuryValue

    document.getElementsByName('water')[0].style.fill = "rgb(103 102 102)"
    document.getElementsByName('water')[1].style.fill = "rgb(103 102 102)"
    document.getElementsByName('water')[2].style.fill = "rgb(103 102 102)"
    document.getElementsByName('water')[3].style.fill = "rgb(103 102 102)"
    document.getElementsByName('water')[4].style.fill = "rgb(103 102 102)"
    document.getElementsByName('water')[5].style.fill = "rgb(103 102 102)"

    liquidUpdate();
    submergedUpdate();
    updateChart()


})

//Reset 

function reset() {

    let intialValue = 100;


    oInput.value = intialValue
    oValue.innerHTML = `${oInput.value / 100}`

    lInput.value = intialValue
    lValue.innerHTML = `${oInput.value / 100}`

    document.getElementsByName('block')[0].style.fill = "#b9b9b9"
    document.getElementsByName('block')[1].style.fill = "#b9b9b9"
    document.getElementsByName('block')[2].style.fill = "#b9b9b9"

    document.getElementsByName('water')[0].style.fill = "#d6d6d6"
    document.getElementsByName('water')[1].style.fill = "#d6d6d6"
    document.getElementsByName('water')[2].style.fill = "#d6d6d6"
    document.getElementsByName('water')[3].style.fill = "#d6d6d6"
    document.getElementsByName('water')[4].style.fill = "#d6d6d6"
    document.getElementsByName('water')[5].style.fill = "#d6d6d6"

    objectUpdate();
    liquidUpdate();
    submergedUpdate()

    renderChart([1.00], [1.00])

}

let myChart;

function renderChart(yValues, xValues) {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Se o gráfico já existe, destrua-o antes de criar um novo
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        animationEnabled: true,
        data: {
            labels: [yValues[0], xValues[0]],
            datasets: [{
                data: [yValues[0], xValues[0]],
                borderWidth: 1.5,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Densidade do objeto / Densidade do fluido',
                    font: {
                        size: 12
                    }
                }
            
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Densidade do objeto',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Densidade do fluido',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}