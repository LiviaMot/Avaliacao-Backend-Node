import ServiceTemperature from '../service/temperature.js'

class ControllerTemperature {
  ConvertCelToFah(req, res) {
    try {
      const cel = req.body.cel
      const fah = ServiceTemperature.ConvertCelToFah(cel)

      res.status(200).send({
        result: { cel, fah }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }

  ConvertFahToCel(req, res) {
    try {
      const fah = req.body.fah
      const cel = ServiceTemperature.ConvertFahToCel(fah)

      res.status(200).send({
        result: { fah, cel }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }

  ConvertCelToKel(req, res) {
    try {
      const cel = req.body.cel
      const kel = ServiceTemperature.ConvertCelToKel(cel)

      res.status(200).send({
        result: { cel, kel }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }

  ConvertKelToCel(req, res) {
    try {
      const kel = req.body.kel
      const cel = ServiceTemperature.ConvertKelToCel(kel)

      res.status(200).send({
        result: { kel, cel }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }

  ConvertCelToRea(req, res) {
    try {
      const cel = req.body.cel
      const rea = ServiceTemperature.ConvertCelToRea(cel)

      res.status(200).send({
        result: { cel, rea }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }

  ConvertCelToRan(req, res) {
    try {
      const cel = req.body.cel
      const ran = ServiceTemperature.ConvertCelToRan(cel)

      res.status(200).send({
        result: { cel, ran }
      })
    } catch (error) {
      res.status(400).send({ msg: error.message })
    }
  }
}

export default new ControllerTemperature()