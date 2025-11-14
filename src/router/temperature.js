import express from "express";
import ControllerTemperature from '../controller/temperature.js'

const router = express.Router()

// api/v1
router.post('/ConvertCelToFah', ControllerTemperature.ConvertCelToFah)
router.post('/ConvertFahToCel', ControllerTemperature.ConvertFahToCel)
router.post('/ConvertCelToKel', ControllerTemperature.ConvertCelToKel)
router.post('/ConvertKelToCel', ControllerTemperature.ConvertKelToCel)
router.post('/ConvertCelToRea', ControllerTemperature.ConvertCelToRea)
router.post('/ConvertCelToRan', ControllerTemperature.ConvertCelToRan)

export default router