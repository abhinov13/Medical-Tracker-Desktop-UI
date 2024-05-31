// event listeners

window.addEventListener("resize", () => {
  // event to correct canvas width and height
  const chartCanvas = document.getElementById("chart");
  chartCanvas.width = chartCanvas.clientWidth;
  chartCanvas.height = chartCanvas.clientHeight;
});

window.addEventListener("DOMContentLoaded", () => {
  // map chart to its container
  mapGraph();
  // map diagnosis data to its card
  mapDiagnosisCard();
  // map user personal data to its card
  mapUserCard()
  // update lab results
  updateLabResults();
  // update diagnostic list
  updateDiagnosticList();
});

// functions to map data to respective cards

function mapGraph() {
  try{
    const chartHolder = document.getElementById("chart");
    const tension = 0.4;
    const diagnosis_history = user.diagnosis_history
    .map((checkup) => 
          (
            {
              date: `${checkup.month}, ${checkup.year}` ,
              systolic: checkup.blood_pressure.systolic.value,
              diastolic: checkup.blood_pressure.diastolic.value 
            }
          )
        );
    
    const labels = diagnosis_history.map(({date}) => date);
    const systolic = diagnosis_history.map(({systolic}) => systolic);
    const diastolic = diagnosis_history.map(({diastolic}) => diastolic);

    new Chart(chartHolder, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: systolic,
            borderWidth: 2,
            borderColor: "#e66fd2",
            backgroundColor: "#e66fd2",
            tension: tension,
          },
          {
            data: diastolic,
            borderWidth: 2,
            borderColor: "#8c6fe6",
            backgroundColor: "#8c6fe6",
            tension: tension,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // correcting width and height of canvas
    chartHolder.width = chartHolder.clientWidth;
    chartHolder.height = chartHolder.clientHeight;
  }
  catch(error)
  {
    alert("An error occurred while creating the graph. Please reload the website to load graph again.")
    console.error(error);
  }
}

function mapUserCard() {

  const {name,
    gender,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type
  } = user;

  document
  .getElementById("username")
  .innerHTML = name;

  document
  .getElementById("gender")
  .innerHTML = gender;
  if(gender === "Male")
    document
    .getElementById("gender-logo")
    .src = "assets/MaleIcon.svg"
  else
    document
    .getElementById("gender-logo")
    .src = "assets/FemaleIcon.svg"
  
  document
  .getElementById("DOB")
  .innerHTML = date_of_birth;

  document
  .getElementById("phone")
  .innerHTML = phone_number;

  document
  .getElementById("emergency-contact")
  .innerHTML = emergency_contact;

  document
  .getElementById("insurance")
  .innerHTML = insurance_type;
}

function mapDiagnosisCard() {

  const diagnosisCardData = user.diagnosis_history[0];

  document
  .getElementById("respiratory-rate")
  .innerHTML = diagnosisCardData.respiratory_rate.value + " bpm";

  document
  .getElementById("respiratory-status")
  .innerHTML = innerHtmlForDiagnosisCard(diagnosisCardData.respiratory_rate.levels);

  document
  .getElementById("heart-rate")
  .innerHTML = diagnosisCardData.heart_rate.value + " bpm";
  
  document
  .getElementById("heart-status")
  .innerHTML = innerHtmlForDiagnosisCard(diagnosisCardData.heart_rate.value);

  document
  .getElementById("temperature")
  .innerHTML = diagnosisCardData.temperature.value + "\u00B0F";

  document
  .getElementById("temperature-status")
  .innerHTML = innerHtmlForDiagnosisCard(diagnosisCardData.temperature.levels);
}

function updateLabResults()
{
  const labResultList = document.getElementById("lab-result-list");
  const labResults = user.lab_results;
  for(let i = 0;i < labResults.length;i++)
  {
    labResultList.appendChild(labResultRow(labResults[i]));
  }
}

function updateDiagnosticList()
{
  const diagnosticListContainer = document.getElementById("diagnostic-list-container");
  const diagnosticList = user.diagnostic_list;
  for(let i = 0;i < diagnosticList.length;i++)
  {
    diagnosticListContainer.appendChild(diagnosticListRow(diagnosticList[i]));
  }
}

// utility functions

function innerHtmlForDiagnosisCard(level) {
  if (level === "Higher than Average")
    return `<img src="assets/ArrowUp.svg" />${level}`;
  else if (level === "Lower than Average")
    return `<img src="assets/ArrowDown.svg" />${level}`;
  else return level;
}

function labResultRow(reportName)
{
  const div = document.createElement('div');
  div.innerHTML = `${reportName}<img src="assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />`
  return div;
}

function diagnosticListRow({name, description, status})
{
  const div = document.createElement('div');
  div.innerHTML = `<div>${name}</div>
                   <div>${description}</div>
                   <div>${status}</div>`
  return div;
}
