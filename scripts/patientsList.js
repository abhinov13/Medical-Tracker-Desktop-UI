
// event listener to load patients list using provided api
window.addEventListener("DOMContentLoaded", () => {
  const { username, password } = credentials;
  const encodedToken = window.btoa(`${username}:${password}`);
  request(encodedToken);
});

// axios request

function request(encoded) {
  axios(generateRequest(encoded))
    .then(({ data }) => {
      console.log(data);
      mapPatientsList(data);
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred while trying to call the api. Please reload the page to call api again.");
    });
}

// function to add data to list of patients in view

function mapPatientsList(patientList)
{
  const processedData = patientList.map(
    ({ name, gender, age, profile_picture }) => ({
      name,
      gender,
      age,
      profile_picture,
    })
  );

  const list = document.getElementById("patient-list");
  processedData.forEach(({ name, gender, age, profile_picture }) => {
    list.appendChild(
      createPatientDiv({ name, gender, age, profile_picture })
    );
  });
}

// additional utility functions

function generateRequest(key) {
  return {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://fedskillstest.coalitiontechnologies.workers.dev",
    headers: {
      Authorization: "Basic " + key,
    },
  };
}

function createPatientDiv({ name, gender, age, profile_picture }) {
  const patient = document.createElement("div");
  patient.className = "patient-data-single";

  patient.innerHTML = `
  <img src="${profile_picture}" alt="patient profile picture" class="patient-profile-pic" />
  <div>
    <div class="patient-name">${name}</div>
    <div class="patient-basic-info">${gender}, ${age}</div>
  </div>
  <img
    src="assets/more_horiz_FILL0_wght300_GRAD0_opsz24.png"
    class="patient-menu-dot"
  />
  `;
  return patient;
}