var data = [
    {
        img : "pics1.jpg",
        pname : "Maldives",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    },

    {
        img : "pic2.jpeg",
        pname : "Goa",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    },

    {
        img : "pic3.jpeg",
        pname : "Keralam",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    },

    {
        img : "pic.jpg",
        pname : "Hong Kong",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    },

    {
        img : "pic5.jpg",
        pname : "Kochii",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    },

    {
        img : "pic6.jpg",
        pname : "Landon",
        ttl : "Keralam 7 days holidays trip backage.",
        user : "Name : ",
        umail : "Gmail : ",
        unum : "Number : ",
        nuperson : "No of person : ",
        nudays : "No of days : ",
        per : "Per-person amt :1000 ",
        trip : "Trip start fram : ",
        etrip : "Trip end fram : ",
        spa : "T    otal : "
    }
]

var dest = document.getElementById("dest")

data.map((value)=>{
    dest.innerHTML+=`<div class="places">
    <div class="photos">
    <img src="${value.img}">
    </div>
    <div class="pd">
    <table >
    <thead>
    <tr>
    <th colspan="2"><h1>${value.pname}</h1></th>
    </tr>
    <tr>
    <th colspan="2"><p>${value.ttl}</p></th>
    </tr>
    <tr>
    <th colspan="2"><h2>${value.per}</h2></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>${value.user}</td>
    <td><input type = "search" placeholder = "enter user name" class = "type" id = "sea"></td>
    </tr>
    <tr>
    <td>${value.umail}</td>
    <td><input type = "gmail" placeholder = "enter user mail" class = "mail" id = "email"></td>
    </tr>
    <tr>
    <td>${value.unum}</td>
    <td><input type = "number" placeholder = "enter user number" class = "pnum" id = "num"></td>
    </tr>
    <tr>
    <td>${value.nuperson}</td>
    <td><input type = "number" placeholder = "number of person" class = "hnum" id = "nperson"></td>
    </tr>
    <tr>
    <td>${value.nudays}</td>
    <td><input type = "number" placeholder = "number of days" class = "udays" id = "days"></td>
    </tr>
    <tr>
    <td>${value.trip}</td>
    <td><input type = "date" placeholder = "enter the date" class = "fdat" id = "date"></td>
    </tr>
    <tr>
    <td>${value.etrip}</td>
    <td><input type = "date" placeholder = "date end fram" class = "ldat" id = "dat"></td>
    </tr>
    <tr>
    <td>${value.spa}<span class = "sspa"><i class="fa-solid fa-indian-rupee-sign"></i> 7000 </span></td>
    <td><button class = "submit1" onclick="calculateTotal(this)">submit</button></td>
    </tr>
    <tr>
    <td colspan="2"><button class = "book" onclick="bookTrip(this)">booking</bitton></td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>`
})


function searchPlace() {
    let searchValue = document.getElementById("yourj").value.toLowerCase().trim();
    let boxes = document.querySelectorAll(".places");

    boxes.forEach(box => {
        let placeName = box.querySelector("h1").innerText.toLowerCase();

        if (placeName.includes(searchValue)) {
            box.style.display = "block";
        }
        else {
            box.style.display = "none";
        }
    });
}


function calculateTotal(btn) {
    btn.closest("table")
    const container = btn.closest("table") 

    const numPerson = parseInt(container.querySelector("#nperson").value) || 0;
    const numDays = parseInt(container.querySelector("#days").value) || 0;
    const totalDisplay = container.querySelector(".sspa");

    if (numDays > 7) {
        alert("Invalid days. Maximum stay is 7 days.");
        container.querySelector("#days").value = "";
        totalDisplay.innerText = "$ 0";
        return;
    }

    const totalAmount = numPerson * numDays * 1000;
    
    if (totalAmount > 0) {
        totalDisplay.innerText = "$ " + totalAmount;
    }
}

function bookTrip(btn) {
    alert("Your trip was booked successfully.");

    const container = btn.parentElement.parentElement;
    const inputs = container.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });

    const totalDisplay = container.querySelector(".sspa");
    if (totalDisplay) {
        totalDisplay.innerText = "$ 7000";
    }
}

