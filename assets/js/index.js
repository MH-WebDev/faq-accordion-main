const expandIcon = document.querySelectorAll(".expand__icon");
const shrinkIcon = document.querySelectorAll(".shrink__icon");
const question = document.querySelectorAll(".faq__question");
const answer = document.querySelectorAll(".faq__answer");

expandIcon[0].style.visibility = "visible";
shrinkIcon[0].style.visibility = "hidden";
answer[0].style.display = "none";

question.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (answer[index].style.display === "block") {
            answer[index].style.display = "none";
            expandIcon[index].style.visibility = "visible";
            shrinkIcon[index].style.visibility = "hidden";
            console.log("Collapsed FAQ State")
      } else {
        answer[index].style.display = "block";
        expandIcon[index].style.visibility = "hidden";
        shrinkIcon[index].style.visibility = "visible";
        console.log("Expanded FAQ State")
      }
    });
});