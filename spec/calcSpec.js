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
    
    //An example scenario where we want to find how many students are left in the Grade Ratio has A & B taken away with only the three other grades remaining.//
    
     describe("Pie function", function() {
        it("should return 38", function() {
            calc.add(20);
            calc.add(39);
            calc.minus(22);
            calc.minus(12);
            expect(calc.value).toBe(25);
        });
        
    });
});    
    