import { describe, it, expect } from '@jest/globals'
import ServiceTemperature from '../src/service/temperature.js'

describe("Testing Cel to Fah", () => {
  it("Testing the zero value", () => {
    const fah = ServiceTemperature.ConvertCelToFah(0)

    expect(fah).toBeCloseTo(32)
  })
  it("Testing positive value", () => {
    const fah = ServiceTemperature.ConvertCelToFah(25)

    expect(fah).toBeCloseTo(77)
  })
  it("Testing negative value", () => {
    const fah = ServiceTemperature.ConvertCelToFah(-10)

    expect(fah).toBeCloseTo(14)
  })
})

describe("Testing Fah to Cel", () => {
  it("Testing the zero value", () => {
    const cel = ServiceTemperature.ConvertFahToCel(0)

    expect(cel).toBeCloseTo(-17.78)
  })  
  it("Testing positive value", () => {
    const cel = ServiceTemperature.ConvertFahToCel(50)

    expect(cel).toBeCloseTo(10)
  })
  it("Testing negative value", () => {
    const cel = ServiceTemperature.ConvertFahToCel(-40)

    expect(cel).toBeCloseTo(-40)
  })
})

describe("Testing Cel to Kel", () => {
  it("Testing the zero value", () => {
    const cel = ServiceTemperature.ConvertCelToKel(0)

    expect(cel).toBeCloseTo(273.15)
  })  
  it("Testing positive value", () => {
    const cel = ServiceTemperature.ConvertCelToKel(35)

    expect(cel).toBeCloseTo(308.15)
  })
  it("Testing negative value", () => {
    const cel = ServiceTemperature.ConvertCelToKel(-20)

    expect(cel).toBeCloseTo(253.15)
  })
})

describe("Testing Kel to Cel", () => {
  it("Testing the zero value", () => {
    const cel = ServiceTemperature.ConvertKelToCel(0)

    expect(cel).toBeCloseTo(-273.15)
  })  
  it("Testing positive value", () => {
    const cel = ServiceTemperature.ConvertKelToCel(300)

    expect(cel).toBeCloseTo(26.85)
  })
  it("Testing negative value", () => {
    const cel = ServiceTemperature.ConvertKelToCel(-15)

    expect(cel).toBeCloseTo(-288.15)
  })
})

describe("Testing Cel to Rea", () => {
  it("Testing the zero value", () => {
    const cel = ServiceTemperature.ConvertCelToRea(0)

    expect(cel).toBeCloseTo(0)
  })  
  it("Testing positive value", () => {
    const cel = ServiceTemperature.ConvertCelToRea(30)

    expect(cel).toBeCloseTo(24)
  })
  it("Testing negative value", () => {
    const cel = ServiceTemperature.ConvertCelToRea(-40)

    expect(cel).toBeCloseTo(-32)
  })
})

describe("Testing Cel to Ran", () => {
  it("Testing the zero value", () => {
    const cel = ServiceTemperature.ConvertCelToRan(0)

    expect(cel).toBeCloseTo(491.67)
  })  
  it("Testing positive value", () => {
    const cel = ServiceTemperature.ConvertCelToRan(40)

    expect(cel).toBeCloseTo(563.67)
  })
  it("Testing negative value", () => {
    const cel = ServiceTemperature.ConvertCelToRan(-55)

    expect(cel).toBeCloseTo(392.67)
  })
})