describe('BMI_UI - index.html', function() {
    beforeEach(function() {
         jasmine.getFixtures().fixturesPath = '.';
         loadFixtures('index.html');
         $.holdReady(false);

     describe('Metric measurments', function() {
         beforeEach(function() {
           $('#mySelect').val('Metric');
           $('#weight').val('90');
           $('#height').val('186');
           $('#calculate').trigger('click');
         });

       it("displays BMI Value", function() {
          expect($('#display_value').text()).toBe('Your BMI is 26.01');
       });

       it("displays BMI Message", function() {
         expect($('#display_message').text()).toBe('and you are Overweight');
       });
     });

     describe('Imperial measurments', function() {
         beforeEach(function() {
           $('#mySelect').val('Imperial');
           $('#weight').val('150');
           $('#height').val('64');
           $('#calculate').trigger('click');
         });

       it("displays BMI Value", function() {
          expect($('#display_value').text()).toBe('Your BMI is 25.74');
       });

       it("displays BMI Message", function() {
         expect($('#display_message').text()).toBe('and you are Overweight');
       });
     });
  });
});
