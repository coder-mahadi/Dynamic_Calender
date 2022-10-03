const yearMonth = document.querySelector(".month_year span")
let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()
let monthDate = document.querySelector(".date")
const month = ["jan", "feb", "march", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
let clender = function () {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    // Get Month And Year
    yearMonth.innerText = `${month[currentMonth]} - ${currentYear}`
    //Get Date of month
    let liList = ""
    for (var i = 1; i <= lastDateOfMonth; i++) {
        liList += `<li> ${i} </li>`
    }
    monthDate.innerHTML = liList;

}
clender()