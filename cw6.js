alert( 'مرحباً بك في موقعي الذي سيحسب درجتك!!' )

let grade = prompt("اكتب درجتك بالأرقام")

console.log(grade)

if (
    grade >= 90 && grade <= 100) {
    console.log("%c لقد حصلت على امتياز", 'color: #ff0000')
    
} else if (grade >= 80 && grade <= 89) {
    console.log("%c لقد حصلت على جيد جداً🤩", 'color: #ff0000')
    
} else if (grade >= 70 && grade <= 79) {
    console.log("%c لقد حصلت على جيد🙂", 'color: #ff0000')

} else if (grade >= 60 && grade <= 69) {
    console.log("%c لقد حصلت على مقبول😕", 'color: #ff0000' ) 
    
} else if (grade >= 50 && grade <= 59) {
    console.log("%c لقد حصلت على ضعيف☹️", 'color: #ff0000')
    
} else {
 console.log("%c راسب💔", 'color: #ff0000')
}
// javascript not java 

