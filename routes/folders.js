import express from 'express';
import { readFolder } from '../utils/fileUtils.js';

const router = express.Router();

router.get('/:name', (req, res) => {
    const name = req.params.name
    const result = readFolder(name)

    if (!result) res.status(404).send('No such folder found');
    else res.status(200).json(result);
})

export default router;
