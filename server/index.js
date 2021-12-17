const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON


// app.delete("/api/motivation/:id", ctrl.deleteMotivation);

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A golden egg of opportunity falls into your lap this month.",
      "A lifetime friend shall soon be made.",
      "A lifetime of happiness lies ahead of you.",
      "All the effort you are making will ultimately pay off."
    ]

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
})

const motivationList = [
  {
    id: 1,
    motivation: "JavaScript is no match for you!"
  },
  {
    id: 2,
    motivation: "You're going to do great things!"
  },
  {
    id: 3,
    motivation: "You're going to become the best coder the world has ever seen!"
  }
];

app.get("/api/motivation", (req, res) => {
  res.status(200).send(motivationList);
})

app.post("/api/motivationList/", (req, res) => {
  const {motivateString} = req.body;

    let newMotivateString = {
    motivation: motivateString,
    id: motivationList[motivationList.length - 1].id++
    }

  motivationList.push(newMotivateString);
  res.status(200).send(motivationList);
})


app.delete("/api/motivation/:id", (req, res) => {
  let {id} = req.params;
  console.log(id)
  const index = motivationList.findIndex(item =>+item.id === +id)
  
  console.log(index)
  motivationList.splice(index, 1);

  res.status(200).send(motivationList);
})


app.listen(4000, () => console.log("Server running on 4000"));