/* 
CORRECT THE MISTAKES OF THE CHARACTER RECOGNITION SOFTWARE

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes

Ex:
  S is misinterpreted as 5
  O is misinterpreted as 0
  I is misinterpreted as 1
*/

const correct = str => {
  const newStr = str.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");
  return newStr;
} 

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");