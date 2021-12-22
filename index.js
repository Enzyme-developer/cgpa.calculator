//selectors dom
const currentCgpa = document.getElementById("current-cgpa");
const currentGpa = document.getElementById("current-gpa");
const semesterNumber = document.getElementById("semester-number");
const calculateCurrentCgpa = document.getElementById("calculate-cgpa");
const calculate = document.getElementById("calculate");
const addCourseToList = document.getElementById("add-course");
// const selectArea = document.getElementById("select-area");

//eventlistener
calculateCurrentCgpa.addEventListener("click" , newCgpa);
calculate.addEventListener("click" ,  calcCgpa);
addCourseToList.addEventListener("click" , addCourse)


//create function that calculates new cgpa according to number of semesters
function newCgpa (e){
    e.preventDefault();
    let formerCgpa = currentCgpa.value;
    let newGpa = currentGpa.value;
    let semester = semesterNumber.value;

    let newSum = Number ((Number(formerCgpa * (semester - 1))) + Number(newGpa) ) / Number(semester);

    currentCgpa.value = "";
    currentGpa.value = "";
    semesterNumber.value = "";
    console.log(newSum);

    if (newSum % 1 !== 0 ) {
      yourNewCgpa = document.getElementById("new-cgpa-value").innerHTML = "Your New C.G.p.A is "+ newSum;
    }else{
      yourNewCgpa = document.getElementById("new-cgpa-value").innerHTML = "Your New C.G.p.A is "+ newSum + ".0";
    }
}




function gradeCalc(grade, unit) {
    if (grade === "A") {
      return 5 * unit;
    } else if (grade === "B") {
      return 4 * unit;
    } else if (grade === "C") {
      return 3 * unit;
    } else if (grade === "D") {
      return 2 * unit;
    } else if (grade === "E") {
      return 1 * unit;
    } else if (grade === "F") {
      return 0 * unit;
    }
  }
  
  let counter = 1;
  
  function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="number" placeholder="Units" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
      </select>  
      <button class="remove" >remove course</button>
    </form>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("select-area").appendChild(addNew);
    counter++;
  }
    
  function calcCgpa() {
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    // const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;
  
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const gradeValue = selectedGrade.text.toUpperCase();
      listOfGrades.push(gradeValue);
    });
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      listOfUnits.push(unitValue);
    });

  let totalEarnedUnits = 0;

  for (let i = 0; i < listOfUnits.length; i++) {
    totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
  }
  const gpa = totalEarnedUnits / totalUnits;

  const newgpa = document.getElementById("cgpa-calc");

  if (gpa % 1 !== 0 ) {
    newgpa.textContent = "Your G.P.A is " + gpa;
  }else{
    newgpa.textContent = "Your G.P.A is " + gpa + ".0";
  }

}