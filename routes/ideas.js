const {Router} = require("express");
const router = Router();
const connection = require('../database');

//GET
router.get('/', async (req, res) => {
    let sql = "SELECT * FROM idea";
    try {
        let sql = "SELECT * FROM idea";
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(await connection.query(sql));
    } catch (error) {
        console.log(error);
    }
});

//GET by ID
router.get("/:id", async(req, res) => {
    let sql = `SELECT * FROM idea WHERE id = ${req.params.id}`;
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(await connection.query(sql));
    } catch (error) {
        console.log(error);
    }
});

//POST
router.post("/post", async(req, res) => {
    let sql = "INSERT INTO `idea` (`id`, `date`, `summary`, `asignees`, `workflow`, `reviewScore`, `reviewNumber`, `user`, `anonymous`, `imgUrl`) VALUES (NULL, ?,?,?,?,?,?,?,?,?)";
    const {date, summary, asignees, workflow, reviewScore, reviewNumber, user, anonymous, imgUrl} = req.body;
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(await connection.query(sql, [date,summary,asignees,workflow,reviewScore,reviewNumber,user,anonymous, imgUrl]));
    } catch (error) {
        console.log(error);
    }
});

//PUT (UPDATE)
router.put("/update/:id", async(req, res) => {
    let sql = "UPDATE `idea` SET `date` = ?, `summary` = ?, `asignees` = ?, `workflow` = ?, `reviewScore` = ?, `reviewNumber` = ?, `user` = ?, `anonymous` = ?, `imgUrl` = ? WHERE `id` = " + req.params.id;
    const {date, summary, asignees, workflow, reviewScore, reviewNumber, user, anonymous, imgUrl} = req.body;
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(await connection.query(sql, [date,summary,asignees,workflow,reviewScore,reviewNumber,user,anonymous, imgUrl]));
    } catch (error) {
        console.log(error);
    }
});


//DELETE
router.delete("/delete/:id", async(req, res) => {
    let sql = `DELETE FROM idea WHERE id = ${req.params.id}`;
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).send(await connection.query(sql));
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;