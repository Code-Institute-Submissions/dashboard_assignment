describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator;
    }); 
    
 //Gender Balance Pie Chart addition (Testing addition of Two Numbers)//    
    
    describe("Addition function", function() {
        it("should return 59", function() {
            calc.add(20);
            calc.add(39);
            expect(calc.value).toBe(59);
        });
        
    });

    //Subject Ratio Pie Chart addition (Testing addition of Three Numbers)//      
    
    describe("Addition function", function() {
        it("should return 59", function() {
            calc.add(19);
            calc.add(19);
            calc.add(21);
            expect(calc.value).toBe(59);
        });
    });
    
    
    //Grade Ratio Pie Chart addition (Testing addition of Five Numbers)//      
    
    describe("Addition function", function() {
        it("should return 59", function() {
            calc.add(7);
            calc.add(7);
            calc.add(11);
            calc.add(22);
            calc.add(12);
            expect(calc.value).toBe(59);
        });
    });   
    
    //An example scenario where we want to find how many students are left in the Gender Balance if Maths is taken from the Subject Ratio//
    
     describe("Pie function", function() {
        it("should return 38", function() {
            calc.add(20);
            calc.add(39);
            calc.minus(21);
            expect(calc.value).toBe(38);
        });
        
    });
    
    //An example scenario where we want to find how many students are left in the Gender Balance Pie Chart when the Grades C & D (numbers 22 and 12, respectively) are taken away and only the other three other grades are remaining.//
    //Testing to see if a manipulationin the Grade pie chart will affect the Gender Balance numbers.//
    //The correct answer should be 25. This test has failed to ensure it is running correctly//
    
    
     describe("Pie function", function() {
        it("should return 38", function() {
            calc.add(59);
            calc.minus(22);
            calc.minus(12);
            expect(calc.value).toBe(25);
        });
        
    });
    
    
    //Average Results by Subject & Gender//
    
     //An example scenario where we want to see if the logic behind the Average section is giving us the correct result.// 
     //In this scenario, we're adding the result of all male students who are taking English (605) and then dividing by the number of male students who take English (9).//
     //The correct answer should be 67.22222222222223 (Fixed to one decimal places in graph.js). This test has failed to ensure it is running correctly//
    
    describe("Average function", function() {
        it("should return 67.22222222222223", function() {
            calc.add(605);
            calc.divide(9);
            expect(calc.value).toBe(67.22222222222223);
        });
        
    });
    
    //An example scenario where we want to see if the logic for calculating the average is working correctly//
    //In this example, we're adding the total results from females studying both English and Irish (1001) and dividing that number by the total number of Females studying those subjects(16).//
    //The correct answer should be 62.5625 (Fixed to one decimal places in graph.js). This test has failed to ensure it is running correctly//
    
     describe("Average function", function() {
        it("should return 62.56", function() {
            calc.add(1001);
            calc.divide(16);
            expect(calc.value).toBe(62.5625);
        });
        
    });
    
    //A final example to test the Average logic I've written for the Average section.//
    //This time, we're adding the total amount of female results for all three subjects (a total of 1308) and dividing it by the total number of female students in all three subjects (20).//
    //The correct answer should be 65.4. This test has failed twice to ensure it is running correctly//
    
    describe("Average function", function() {
        it("should return 65.4", function() {
            calc.add(1308);
            calc.divide(20);
            expect(calc.value).toBe(65.4);
        });
        
    });
    
    
});    


    