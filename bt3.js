function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("")
    return str === reversed
}
let str1 = "anna";
if (checkPalindrome(str1))
    console.log("Chuoi do la Palidrome");
else
    console.log("chuoi do khong phai la palidrome");