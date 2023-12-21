const router = require ("express").Router();

router.get("/", (req, res, next)=>{
    res.json("Everything works")
});

const phoneRoutes = require ("./phone.routes")
router.use("/phones", phoneRoutes)

module.exports = router;