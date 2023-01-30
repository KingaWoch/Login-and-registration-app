const userName = localStorage.getItem("username");

document.getElementById("user").textContent = userName; 

const loginUserName = localStorage.getItem("login-username");

document.getElementById("user").textContent = loginUserName;


/*  doughnut chart */


const ctx = document.getElementById('doughnut-chart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Wydatki - zakupy', 'Wydatki - inne', 'Wpływy - wynagrodzenie', 'Wpływy - inne'],
    datasets: [{
        label: '% transakcji',
        data: [42.86, 28.58, 14.28, 14.28 ],
        borderWidth: 1
    }]
    }
});


/*  bar chart  */


const ctx2 = document.getElementById('bar-chart');

new Chart(ctx2, {
    type: 'bar',
    data: {
    labels: ['2022-11-09', '2022-11-10', '2022-11-12',],
    datasets: [{
        label: 'Saldo w zł',
        data: [3000, 2555.55, 4337.25],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});


/*  getting transaction history   */ 

function getTransactionData() {
    let url = "https://api.npoint.io/38edf0c5f3eb9ac768bd";


    fetch(url).then( function(response) { 
        response.json().then( function(data) {
            console.log(data);
            updateTransactionData(data);
        } );
    } );
}

getTransactionData();

function updateTransactionData(data) {
    const transactions = data.transactions;
    const table = document.getElementById("table-body");

    transactions.forEach( el => {
        const date = el.date;
        const type = el.type;
        const description = el.description;
        const amount = el.amount;
        const balance = el.balance;

        addDataToTable(date, type, description, amount, balance, table);
    });
}

function addDataToTable(date, type, description, amount, balance, table){
    const el = document.createElement("div");
    el.classList.add("transaction");

    el.innerHTML = `
        <div class="date"> ${date} </div>
        <div class="transaction-type"> ${type} </div>
        <div> ${description} </div>
        <div> ${amount} zł </div>
        <div class="balance"> ${balance} zł </div>
    `;

    table.append(el);
}


/* arrows */

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const doughnut = document.getElementById("doughnut");
const bar = document.getElementById("bar");


leftArrow.addEventListener("click", function() {
    doughnut.style.display = "block";
    bar.style.display = "none";
    leftArrow.style.color = "rgba(0,0,0,0.2)";
    rightArrow.style.color = "black";
})


rightArrow.addEventListener("click", function() {
    doughnut.style.display = "none";
    bar.style.display = "block";
    rightArrow.style.color = "rgba(0,0,0,0.2)";
    leftArrow.style.color = "black";
})


/* logout */

const logoutBtn = document.querySelector("#logout-button button");

logoutBtn.addEventListener("click", function() {
    window.location.href = "index.html";
})

