const bucket1 = document.getElementById("bucket1");
const bucket2 = document.getElementById("bucket2");
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");
let bucket1count = document.querySelector("#bucket1 span");
let bucket2count = document.querySelector("#bucket2 span");

let count1 = parseInt(bucket1count.textContent);
const intialCount = count1;
let count2 = parseInt(bucket2count.textContent);
leftButton.addEventListener("click", () => {
  if (count1 > 0) {
    count1--;
    bucket1count.innerHTML = count1;
    }
    if (count2 < intialCount) {
        count2++;
        bucket2count.innerHTML = count2;
    }


});
rightButton.addEventListener("click", () => {
  if (count2 > 0) {
    count2--;
    bucket2count.innerHTML = count2;
    }
    if (count1 < intialCount) {
        count1++;
        bucket1count.innerHTML = count1;
    }
});
