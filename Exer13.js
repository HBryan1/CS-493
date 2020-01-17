document.addEventListener("DOMContentLoaded", init);

function init() {

    let info = {
        name: ["Joa", "John", "jay", "bob"],
        age: [16, 17, 18, 19 ],
        id: [123, 321, 456, 654],
        address: ["123 st", "321 ave", "456 blvd", "654 pl"],
        courses: ["one", "two", "three", "All"],
    }

    let empList = [
        {
            "fname": "Sharad",
            "lname": "Volz"
        },
        {
            "fname": "Constance",
            "lname": "Dech"
        },
        {
            "fname": "Myra",
            "lname": "Comeau"
        },
        {
            "fname": "Noriess",
            "lname": "Dabbs"
        },
        {
            "fname": "Esperanza",
            "lname": "Shrestha"
        },
        {
            "fname": "Eugene",
            "lname": "Barron"
        },
        {
            "fname": "Petr",
            "lname": "Ravenelle"
        },
        {
            "fname": "Cristina",
            "lname": "Terry"
        },
        {
            "fname": "Victoria",
            "lname": "Aresti"
        },
        {
            "fname": "Byron",
            "lname": "Yarber"
        }
    ];


    

    let table = document.getElementById("empData");
    table.innerHTML = "";

    for (let n of empList) {

        let newTr = document.createElement("tr");
        let newTd1 = document.createElement("td");
        let newTd2 = document.createElement("td");

        newTd1.innerText = n.fname;
        newTd2.innerText = n.lname;

        let table = document.getElementById("empData");
        table.appendChild(newTr);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
    }




    document.getElementById("txtName").innerText = info.name[2];
    document.getElementById("txtAge").innerText = info.age[3];
    document.getElementById("txtID").innerText = info.id[1];
    document.getElementById("txtAddress").innerText = info.address[0];
    document.getElementById("txtCourses").innerText = info.courses[2];
}