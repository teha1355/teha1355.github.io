
const company= {
    "companyName" : "Tech Stars", //Problem 2
    "website" : "www.techstars.site",
    "employees" : [
        {
           "first name": "Sam", //Problem 1
           "department" : "Tech",
           "designation" : "Manager",
           "salary" : 40000,
           "raise eligible" : "true",
           "wth" : "true" //Problem 6
        },
        {
            "first name": "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise eligible" : "true",
            "wth" : "false"  
        },
        {
            "first name" : "Bill",
           "department" : "HR",
           "designation" : "Executive",
           "salary" : 21200,
           "raise eligible" : "false",
           "wth" : "false" 
        },
        {
            "first name": "Anna", //Problem 3
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : 25600,
            "raise eligible" : "false",
            "wth" : "true"  
        }
    ]
}

function getSalary() { //Problem 4
    const employee1= company["employees"][0]["salary"];
    const employee2= company["employees"][1]["salary"];
    const employee3= company["employees"][2]["salary"];
    const employee4= company["employees"][3]["salary"];

    const salary= employee1 + employee2 + employee3 + employee4 ;
    console.log("Problem 4");
    console.log(salary);
}

function updateSalary() { //Problem 5
    console.log("Problem 5");
    for(let i=0; i<4; i++) {
        if (company["employees"][i]["raise eligible"]=="true"){
            const incr= company["employees"][i]["salary"] * 0.1;
            company["employees"][i]["salary"]=company["employees"][i]["salary"] + incr;

            company["employees"][i]["raise eligible"]= "false";

            console.log(company["employees"][i]["first name"]);
            console.log(company["employees"][i]["salary"]);
            console.log(company["employees"][i]["raise eligible"]);
        }
    }
}

console.log("Problems 1,2,3,6");
console.log(company);

getSalary();
updateSalary();


