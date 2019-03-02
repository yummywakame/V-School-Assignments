/* 
    Balance Parentheses

    Given a string including parentheses, write a function that returns true 
    if every opening parentheses has a closing parentheses.
    
    balanceParentheses("()()") // Output: true
    balanceParentheses("(())") // Output:  true
    balanceParentheses("()))") // Output:  false
    
    Also, every closing parentheses needs an opening partner before it.
    
    balanceParentheses(")()(") // Output:  false
    balanceParentheses("())(") // Output:  false
*/

function balanceParentheses(str){
    // check for invalid start bracket ")" or invalud end bracket "("
    if (str.startsWith(")") || str.endsWith("(")) {
        return false
    } else {
        let arr1 = str.match(/\(/g)
        let arr2 = str.match(/\)/g)
        if (arr1.length === arr2.length) {
            return true
        } else {
            return false
        }
    }
}
console.log('\nAre these parentheses balanced? "()()"')
console.log(balanceParentheses("()()")) // Output: true

console.log('\nAre these parentheses balanced? "(())"')
console.log(balanceParentheses("(())")) // Output: true

console.log('\nAre these parentheses balanced? "()))"')
console.log(balanceParentheses("()))")) // Output: false

console.log('\nAre these parentheses balanced? ")()("')
console.log(balanceParentheses(")()(")) // Output: false

console.log('\nAre these parentheses balanced? "())("')
console.log(balanceParentheses("())(")) // Output:  false