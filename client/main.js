const displayList = arrOfObjs => {
    let listDiv = document.getElementById('listcontainer');
    listDiv.innerHTML = '';
    const newList = document.createElement('ul');
    listDiv.appendChild(newList);
    
    for (let i = 0; i < arrOfObjs.length; i++) {
        listItem = document.createElement('li');
        listItem.id = arrOfObjs[i].id;
        listItem.appendChild(document.createTextNode(arrOfObjs[i].motivation));
        newList.appendChild(listItem);

        deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `${arrOfObjs[i].id}`);
        deleteButton.textContent = "X";
        listItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteMotivation);
    }
}

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


const getFortune = event => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
}


const getMotivation = event => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(function (response) {
        displayList(response.data);
    })
}


const createMotivation = event => {
    event.preventDefault()

    const text = document.getElementById('addMotivation').value;

    axios.post("http://localhost:4000/api/motivationList/", {
        motivateString: text
    })
    .then(function (response) {
        displayList(response.data);
        document.getElementById('addMotivation').value = '';
    })
}

const deleteMotivation = event => {
    event.preventDefault();

    const id = event.target.id;

    axios.delete(`http://localhost:4000/api/motivation/${id}`)
    .then(function (response) {
        displayList(response.data);
    })
}


const fortuneButton = document.getElementById('fortuneButton');
fortuneButton.addEventListener('click', getFortune);

const motivationButton = document.getElementById('motivationButton');
motivationButton.addEventListener('click', getMotivation);

const submitQuote = document.getElementById('submitButton');
submitQuote.addEventListener('click', createMotivation);

// const deleteButton = document.getElementById('deleteButton');
