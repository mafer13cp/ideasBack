const {Router} = require("express");
const router = Router();
const connection = require('../database');

//GET
router.get('/', (req, res) => {
    let sql = "SELECT * FROM idea";
    connection.query(sql, (err, rows, fields) => {
    if (err) {
        throw err;
    }
    res.status(200).send(rows);
    })
});

//GET by ID
router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM idea WHERE id = ${req.params.id}`;
    connection.query(sql, (err, rows, fields) => {
    if (err) {
        throw err;
    }
    res.status(200).send(rows);
    })
});

//POST
router.post("/post", (req, res) => {
    let sql = "INSERT INTO `idea` (`id`, `date`, `summary`, `asignees`, `workflow`, `reviewScore`, `reviewNumber`, `user`, `anonymous`) VALUES (NULL, ?,?,?,?,?,?,?,?)";
    const {date, summary, asignees, workflow, reviewScore, reviewNumber, user, anonymous} = req.body;
    connection.query(sql,[date,summary,asignees,workflow,reviewScore,reviewNumber,user,anonymous],
         (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
        })
});

//PUT (UPDATE)
router.put("/update/:id", (req, res) => {
    let sql = "UPDATE `idea` SET `date` = ?, `summary` = ?, `asignees` = ?, `workflow` = ?, `reviewScore` = ?, `reviewNumber` = ?, `user` = ?, `anonymous` = ? WHERE `id` = " + req.params.id;
    const {date, summary, asignees, workflow, reviewScore, reviewNumber, user, anonymous} = req.body;
    connection.query(sql,[date,summary,asignees,workflow,reviewScore,reviewNumber,user,anonymous],
         (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
        })
});


//DELETE
router.delete("/delete/:id", (req, res) => {
    let sql = `DELETE FROM idea WHERE id = ${req.params.id}`;
    connection.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
        })
})

module.exports = router;