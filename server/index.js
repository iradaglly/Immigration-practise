const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD;
mongoose
    .connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("Mongo DB Connected!"));


const CountrySchema = new mongoose.Schema({
    image: String,
    countryName: String,
    title: String,
    desc: String
});

const CountryModel = mongoose.model("countries", CountrySchema);

// get all
app.get("/countries", async (req, res) => {
    const { title } = req.query;
    const countries = await CountryModel.find();
    if (title === undefined) {
        res.status(200).send(countries);
    } else {
        res
            .status(200)
            .send(
                countries.filter((x) =>
                    x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
                )
            );
    }
});

// get by id
app.get("/countries/:id", async (req, res) => {
    const id = req.params.id;
    const country = await CountryModel.findById(id);
    if (!country) {
        res.status(204).send("country not found!");
    } else {
        res.status(200).send(country);
    }
});

//delete
app.delete("/countries/:id", async (req, res) => {
    const id = req.params.id;
    const country = await CountryModel.findByIdAndDelete(id);
    if (country === undefined) {
        res.status(404).send("country not found");
    } else {
        res.status(203).send(country);
    }
},)

// post
app.post("/countries", async (req, res) => {
    const { image, title, desc, countryName } = req.body;
    const newCountry = new CountryModel({
        image: image,
        title: title,
        desc: desc,
        countryName: countryName
    });
    await newCountry.save();
    res.status(201).send("created");
});

// put
app.put("/countries/:id", async (req, res) => {
    const id = req.params.id;
    const { image, title, desc, countryName } = req.body;
    const existedCountry = await CountryModel.findByIdAndUpdate(id, {
        image: image,
        title: title,
        desc: desc,
        countryName: countryName
    });
    if (existedCountry == undefined) {
        res.status(404).send("country not found!");
    } else {
        res.status(200).send(`${title} updated successfully!`);
    }
});





PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});