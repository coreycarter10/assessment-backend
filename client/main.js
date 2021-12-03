document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

const fortuneButton = document.getElementById('fortuneButton');

const getFortune = event => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
}

fortuneButton.addEventListener('click', getFortune);

const motivationButton = document.getElementById('motivationButton');

const getMotivation = event => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
}

motivationButton.addEventListener('click', getMotivation);

const submitQuote = document.getElementById('createMotivationSubmit');

const createMotivation = event => {
    axios.post("http://locahost:4000/api/motivation/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    })
}

submitQuote.addEventListener('click', createMotivation);
