"use strict";

let tr = document.getElementsByTagName("table");

for (let i = 0; i < tr.length; i++) {
    alert(tr[i].closest.textContent);
    
}

alert(tr.rows)

// let sorted = [];

// for (let i = 0; i < tr.length; i++) {
//     sorted = tr.sort((a,b) => a.childNodes[0].textContent.localCompare(b.childNodes[0].textContent));
    
// }



// for (let i = 0; i < sorted.length; i++) {
//     alert(sorted[i]);
    
// }

// for (let i = 0; i < tr.length; i++) {

//         tr[i].innerHTML = sorted[i];
   
    
// }

