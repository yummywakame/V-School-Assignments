// https://coursework.vschool.io/jest-testing/


// jest will test all files with the test.js extension.
// it doesnt need to be imported becasue its imported via package.json
// describe, test, it, 
// exect, toBe, toEqual

// // Expecting something to not be something else
// expect(0).not.toBe(1) 
  
// // Checking Types
//   expect(null).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
//     /* others in jest docs */
    
// // Checking numerical values
//   expect(4).toBeGreaterThan(3);
//   expect(3.6).toBeGreaterThanOrEqual(3.5)
  
// // Checking array contents
//   expect([1, 2, 3]).toContain(2)

const reverseArray = require('./reverseArray.js')

describe("The Reverse Array Function", () => {

    it('Returns the array reversed', () => {
        // expect(reverseArray([1, 2, 3])).toBe([3, 2, 1]) // will break for arrays, because each array is located in different memory
        expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]) // used for arrays and objects
    })
    
    test("If given empty array, returns the string 'Please provide array with contents.'", () => {
        expect(reverseArray([])).toBe("Please provide array with contents.")
    })
})

