const CSV_URL = "https://gramy-pod-opcje.pl/api/options/footprint/csv/09-24-2025";

// cargar CSV
function loadCSV(url) {
    Papa.parse(url, {
        download: true,
        header: true,
        complete: function(results) {
            console.log("CSV cargado:", results.data);
            processData(results.data);
        }
    });
}

// procesar datos agrupados por strike
function processData(data) {
    let grouped = {};

    data.forEach(row => {
        let strike = row.strike || row.Strike;
        if (!strike) return;

        if (!grouped[strike]) grouped[strike] = {accd:0, delta:0, put:0, call:0};
        grouped[strike].accd  += parseFloat(row["acc d"] || row["AccD"] || 0);
        grouped[strike].delta += parseFloat(row["delta"] || row["Delta"] || 0);
        grouped[strike].put   += parseFloat(row["put"]   || row["Put"]   || 0);
        grouped[strike].call  += parseFloat(row["call"]  || row["Call"]  || 0);
    });

    let strikes = Object.keys(grouped).sort((a,b) => parseFloat(a)-parseFloat(b));
    let accd = strikes.map(s => grouped[s].accd);
    let delta = strikes.map(s => grouped[s].delta);
    let put = strikes.map(s => grouped[s].put);
    let call = strikes.map(s => grouped[s].call);

    drawCharts(strikes, accd, delta, put, call);
}

// dibujar gráficos
function drawCharts(strikes, accd, delta, put, call) {
    let ctx1 = document.getElementById("chart1").getContext("2d");
    let ctx2 = document.getElementById("chart2").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: strikes,
            datasets: [
                {label:"Acc D", data: accd, backgroundColor:"blue"}
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: "top" } },
            scales: { x: { title: { display: true, text: "Strike" } } }
        }
    });

    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: strikes,
            datasets: [
                {label:"Delta", data: delta, backgroundColor:"green"},
                {label:"Put", data: put, backgroundColor:"red"},
                {label:"Call", data: call, backgroundColor:"orange"}
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: "top" } },
            scales: { x: { title: { display: true, text: "Strike" } } }
        }
    });
}

// iniciar
loadCSV(CSV_URL);
