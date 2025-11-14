class ServiceTemperature {
  ConvertCelToFah(cel) {
    if (isNaN(cel)) {
      throw new Error('O valor deve ser um número!')      
    }
    return (cel * 9 / 5) + 32
  }

  ConvertFahToCel(fah) {
    if (isNaN(fah)) {
      throw new Error('O valor deve ser um número!')      
    }
    return (fah - 32) * 5 / 9
  }

  ConvertCelToKel(cel) {
    if (isNaN(cel)) {
      throw new Error('O valor deve ser um número!')
    }
    return cel + 273.15
  }

  ConvertKelToCel(kel) {
    if (isNaN(kel)) {
      throw new Error('O valor deve ser um número!')
    }
    return kel - 273.15
  }

  ConvertCelToRea(cel) {
    if (isNaN(cel)) {
      throw new Error('O valor deve ser um número!')
    }
    return cel * 4 / 5
  }

  ConvertCelToRan(cel) {
    if (isNaN(cel)) {
      throw new Error('O valor deve ser um número!')
    }
    return (cel + 273.15) * 9 / 5
  }
}

export default new ServiceTemperature()