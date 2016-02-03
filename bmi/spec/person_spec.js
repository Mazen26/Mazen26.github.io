describe("Person", function() {
  var person;
  var person_2

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_2 = new Person({weight: 150, height: 64});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value in metric", function() {
  person.calculate_bmi_met();
  expect(person.bmiValue).toEqual(26.01)
  });

  it("should calculate BMI value in imperial", function() {
  person_2.calculate_bmi_imp();
  expect(person_2.bmiValue).toEqual(25.74)
  });

  it("should have a BMI Message", function() {
  person.calculate_bmi_met();
  expect(person.bmiMessage).toEqual("Overweight")
  });

});
