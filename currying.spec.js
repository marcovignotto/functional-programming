const {
  multiply,
  volumeCalculation,
  solveEquation,
  discount,
  generalCurry,
} = require("./index.js");

describe("Currying tests", () => {
  it("Given `1,2,3` > `6`", () => {
    expect.assertions(2);

    // 1st usage
    expect(multiply(1)(2)(3)).toBe(6);

    // 2nd usage
    const mul1 = multiply(1);
    const mul2 = mul1(2);
    const res = mul2(3);

    expect(res).toBe(6);
  });

  it("Volume Calculation, given `100, 20, 90` > `180000`", () => {
    expect.assertions(2);
    // 1 st usage
    expect(volumeCalculation(100)(20)(90)).toBe(180000);

    // 2nd usage
    const vol1 = volumeCalculation(100);
    const vol2 = vol1(20);
    const res = vol2(90);

    expect(res).toBe(180000);
  });

  it("solveEquation, given `3, 4` > `13` ", () => {
    expect.assertions(1);

    expect(solveEquation(3)(4)).toBe(13);
  });

  it("discount, given `2000,0.10` > `1800`", () => {
    expect.assertions(2);
    // 1st usage
    expect(discount(0.1)(2000)).toBe(1800);

    // 2nd usage
    const tenPercentDiscount = discount(0.1);
    expect(tenPercentDiscount(2000)).toBe(1800);
  });

  it("General curry function, given volume to calc `100, 200, 900` > `18000000`", () => {
    const calcMyVol = (l, h, w) => l * h * w;

    expect(generalCurry(calcMyVol, 100)(200, 900)).toBe(18000000);
  });
});
