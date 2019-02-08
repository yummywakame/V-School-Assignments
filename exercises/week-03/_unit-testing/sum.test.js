var { sum } = require('./sum')

describe("The Sum function", function(){

    it("Adds 1 + 2 to equal 3", function(){
        expect(sum(1, 2)).toBe(3)
    })

    test("negative numbers give correct ouput", function(){
        expect(sum(-1, -2)).toBe(-3)
        expect(sum(-50, -2)).toBe(-52)
        expect(sum(-100, -10)).toBe(-110)
    })

    test("If not arguments, sends error string", function(){
        expect(sum()).toBe("Please provide 2 numbers")
    })

    // it("returns an error if non-numerical values are given", function(){
    //     expect(sum(true, "hello")).toBe("Please provide 2 numercial values")
    //     expect(sum([], {})).toBe("Please provide 2 numercial values")
    //     expect(sum(null, undefined)).toBe("Please provide 2 numercial values")
    // })
})