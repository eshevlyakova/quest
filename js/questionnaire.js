let btnsFurther = document.querySelectorAll(".btn-further"),
    counterSlide = 1,
    counterSlideButtons = 0,
    idChooseAnswer = 0,
    valueChooseAnswerWrapper = 0,
    elementChooseAnswer = 0,
    // здесь все ответы пользователя
    arrayAnswers = [];

btnsFurther.forEach(function(item) {
    item.addEventListener("click", function() {
        event.preventDefault();

        counterSlideButtons++;
        elementChooseAnswer = document.querySelector('input[name="question-' + counterSlide + '"]:checked');

        if (elementChooseAnswer == null) {
            alert("Выберите подходящий вариант ответа");
            counterSlideButtons--;
        } else {
            idChooseAnswer = 'label[for="' + elementChooseAnswer.getAttribute("id") + '"';
            valueChooseAnswerWrapper = document.querySelector(idChooseAnswer);
            let valueChooseAnswer = valueChooseAnswerWrapper.getElementsByTagName('p')["0"].textContent;
            arrayAnswers.push(valueChooseAnswer);

            counterSlide++;
            let numberSlide = 'slide-' + counterSlide;

            let slides = document.querySelectorAll(".quiz-price__quiz__item");
            slides.forEach(function(item) {
                item.classList.remove("quiz-price__quiz__item_active");
                if (item.getAttribute('data-counter') == numberSlide) {
                    item.classList.add("quiz-price__quiz__item_active");
                }
            });

            let inputsAnswer = document.querySelectorAll(".quiz-price__quiz__item-final__answers");
            if (counterSlide === inputsAnswer.length + 1) {
                for (let i = 0; i < inputsAnswer.length; i++) {
                    inputsAnswer[i].value = arrayAnswers[i];
                }
            }
        };
    });
});

let btnMain = document.querySelector(".btn-quiz-main");

btnMain.addEventListener("click", function() {
    let linkChooseAnswer = document.querySelector('input[name="question-1"]:checked').parentNode.getAttribute('href');
    document.location.href = linkChooseAnswer;
});