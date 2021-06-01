import express from 'express';
import {exec} from 'child_process';
const router = express.Router();
router.get("/test", (req, res) => {
    res.send({page:"TestPage", message:"Welcome to TestPage"});
})

router.get("/google", () => {
    exec('testcafe chrome ./src/tests/TestGoogleSearch.ts', (error, stdout, stderr) => {
        if (error) {
            console.log(`error : ${error.message}`)
            return;
        }
        if (stderr) {
            console.log(`stderr : ${stderr}`)
            return;
        }
        console.log(`stdout : ${stdout}`)
    })
})

export default router;