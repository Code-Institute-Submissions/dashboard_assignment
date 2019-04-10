describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator;
    }); 
    
//Basic Findings//
    
    
    //Gender Balance Pie Chart addition (Testing addition of two numbers).//  
    //Simple test to make sure the Gender pie chart is showing the correct figure for the number of male and female in the report.// 
    //The correct answer should be 59. This test has failed to ensure it is running correctly.//    
    
    describe("Addition function", function() {
        it("should return 59", function() {
            calc.add(20);
            calc.add(39);
            expect(calc.value).toBe(59);
        });
        
    });

    //Subject Ratio Pie Chart addition (Testing the addition power by adding three numbers together).//
    //Simple test to make sure the Subject pie chart is showing the correct figure for the number of subjects in the report.// 
    //The correct answer should be 59. This test has failed to ensure it is running correctly.//
     
    describe("Addition function", function() {
        it("should return 59", function() {
            calc.add(19);
            calc.add(19);
            calc.add(21);
            expect(calc.value).toBe(59);
        });
    });
    
    
    //Grade Ratio Pie Chart addition (Testing the addition power by adding five numbers together).//      
    //Simple test to make sure the Grade pie chart is showing the correct figure for the number of Grades used in the report.// 
    //The correct answer should be 59. This test has failed to ensure it is running correctly.//
    
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
    
    
    //An example scenario where we want to find how many students are left in the Gender Balance if Maths is taken from the Subject Ratio.//
    //Testing to see if a manipulation in the Subject Ratio pie chart will affect the Gender Balance numbers.//
    //The correct answer should be 38. This test has failed to ensure it is running correctly.//
    
     describe("Pie function", function() {
        it("should return 38", function() {
            calc.add(20);
            calc.add(39);
            calc.minus(21);
            expect(calc.value).toBe(38);
        });
        
    });
    
    //An example scenario where we want to find how many students are left in the Gender Balance Pie Chart when the Grades C & D (numbers 22 and 12, respectively) are taken away and only the other three other grades are remaining.//
    //Testing to see if a manipulation in the Grade pie chart will affect the Gender Balance numbers.//
    //The correct answer should be 25. This test has failed to ensure it is running correctly.//
    
    
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
     //The correct answer should be 67.22222222222223 (Fixed to one decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
    describe("Average function", function() {
        it("should return 67.22222222222223", function() {
            calc.add(605);
            calc.divide(9);
            expect(calc.value).toBe(67.22222222222223);
        });
        
    });
    
    //An example scenario where we want to see if the logic for calculating the average is working correctly.//
    //In this example, we're adding the total results from females studying both English and Irish (1001) and dividing that number by the total number of Females studying those subjects(16).//
    //The correct answer should be 62.5625 (Fixed to one decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
     describe("Average function", function() {
        it("should return 62.56", function() {
            calc.add(1001);
            calc.divide(16);
            expect(calc.value).toBe(62.5625);
        });
        
    });
    
    //A final example to test the Average logic I've written for the Average section.//
    //This time, we're adding the total amount of female results for all three subjects (a total of 1308) and dividing it by the total number of female students in all three subjects (20).//
    //The correct answer should be 65.4. This test has failed twice to ensure it is running correctly.//
    
    describe("Average function", function() {
        it("should return 65.4", function() {
            calc.add(1308);
            calc.divide(20);
            expect(calc.value).toBe(65.4);
        });
        
    });
    
//Honour Roll//

    //An example to test the logic behind the Honour Roll section.//
    //We're dividing the total number of female students who achieved a result of 70% or more in the midterm (7) by the total number of female students overall (20).//
    //The correct answer should be 35. This test has failed to ensure it is running correctly.//
    

    describe("Honour function", function() {
        it("should return 35", function() {
            calc.add(7);
            calc.divide(20);
            calc.multiply(100);
            expect(calc.value).toBe(35);
        });
        
    });
    
    
    //An example to test the logic behind the Honour Roll section.//
    //We're dividing the total number of male students who achieved a result of 70% or more in the midterm (11) by the total number of male students overall (39).//
    //The correct answer should be 28.205128205128204 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    

    describe("Honour function", function() {
        it("should return 28.205128205128204", function() {
            calc.add(11);
            calc.divide(39);
            calc.multiply(100);
            expect(calc.value).toBe(28.205128205128204);
        });
        
    });
    
    
    //An example to test the logic behind the Honour Roll section.//
    //We're dividing the total number of students who achieved a result of 70% or more in the English (8) by the total number of students studying English(19).//
    //The correct answer should be 42.10526315789473 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    

    describe("Honour function", function() {
        it("should return 42.10526315789473", function() {
            calc.add(8);
            calc.divide(19);
            calc.multiply(100);
            expect(calc.value).toBe(42.10526315789473);
        });
        
    });
    
    
    //An example to test the logic behind the Honour Roll section.//
    //We're dividing the total number of students who achieved a result of 70% or more in the Maths (5) by the total number of students studying Maths (21).//
    //The correct answer should be 23.809523809523807 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    

    describe("Honour function", function() {
        it("should return 23.809523809523807", function() {
            calc.add(5);
            calc.divide(21);
            calc.multiply(100);
            expect(calc.value).toBe(23.809523809523807);
        });
        
    });
    
    //An example to test the logic behind the Honour Roll section.//
    //We're dividing the total number of students who achieved a result of 70% or more in the Irish (5) by the total number of students studying Irish (19).//
    //The correct answer should be 26.31578947368421 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    

    describe("Honour function", function() {
        it("should return 23.809523809523807", function() {
            calc.add(5);
            calc.divide(19);
            calc.multiply(100);
            expect(calc.value).toBe(26.31578947368421);
        });
        
    });
    
    
    
    //An example to test the logic behind the Honour Roll section.//
    //We're testing to see if a user clicks the Irish segment of any chart whether the female number box will then only show the number of women doing Irish getting over 70%.//
    //The fraction of females achieving 70% or more in Irish is 1/6, so female number box should display the number 16.67 if any Irish segment is clicked.//
    //Testing to see if a manipulation of a seperate graph will give us relevant information in the Honour roll number box.//
    //The correct answer should be 16.666666666666664 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
     describe("Honour function", function() {
        it("should return 16.666666666666664", function() {
            calc.add(1);
            calc.divide(6);
            calc.multiply(100);
            expect(calc.value).toBe(16.666666666666664);
        });
        
    });
    
    
    //An example to test the logic behind the Honour Roll section.//
    //We're testing to see if a user clicks the male segment of any chart whether the maths number box will then only show the number of males getting getting over 70%.//
    //The fraction of males achieving 70% or more in Irish is 3/17, so the maths number box should display the number 17.65 if any maths segment is clicked.//
    //Testing to see if a manipulation of a seperate graph will give us relevant information in the Honour roll number box.//
    //The correct answer should be 17.647058823529413 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
     describe("Honour function", function() {
        it("should return 16.666666666666664", function() {
            calc.add(3);
            calc.divide(17);
            calc.multiply(100);
            expect(calc.value).toBe(17.647058823529413);
        });
        
    });

    //An example to test the logic behind the Honour Roll section.//
    //We're testing to see if a user clicks the English and Maths segments, will the male number box show the correct percent average for both subjects for males.//
    //The fraction of males achieving 70% or more in English and Maths is 7/26, so the male number box should display the number 26.92% if both segments are clicked.//
    //Testing to see if a manipulation of a seperate graph will give us relevant information in the Honour roll number box.//
    //The correct answer should be 26.923076923076923 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
     describe("Honour function", function() {
        it("should return 16.666666666666664", function() {
            calc.add(7);
            calc.divide(26);
            calc.multiply(100);
            expect(calc.value).toBe(26.923076923076923);
        });
        
    });
    
    //An example to test the logic behind the Honour Roll section.//
    //We're testing to see if a user clicks the English and Irish segments, will the female number box show the correct percent average for both subjects for females.//
    //The fraction of females achieving 70% or more in English and Irish is 5/16, so the female number box should display the number 31.25% if both segments are clicked.//
    //Testing to see if a manipulation of a seperate graph will give us relevant information in the Honour roll number box.//
    //The correct answer should be 31.25 (Fixed to two decimal places in graph.js). This test has failed to ensure it is running correctly.//
    
     describe("Honour function", function() {
        it("should return 16.666666666666664", function() {
            calc.add(5);
            calc.divide(16);
            calc.multiply(100);
            expect(calc.value).toBe(31.25);
        });
        
    });


    
    
    
    
    
    
    
});    


    