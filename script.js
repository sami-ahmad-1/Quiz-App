const questions = [                                       
    {
        'question':'Which of the folowing is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JS', 
        'd' : 'Node JS',
        'correct' : 'a',
    },
    {
        'question':'Which of the folowing is used to design web pages?',
        'a' : 'HTML',
        'b' : 'Node JS',
        'c' : 'JS', 
        'd' : 'CSS',
        'correct' : 'd',
    },
    {
        'question':'Which of the folowing used to add logic to web pages?',
        'a' : 'JS', 
        'b' : 'CSS',
        'c' : 'HTML',
        'd' : 'Node JS',
        'correct' : 'a',
    },
    {
        'question':'Which of the folowing is used in backend?',
        'a' : 'CSS',
        'b' : 'JS', 
        'c' : 'Node JS',
        'd' : 'HTML',
        'correct' : 'c',
    }
]

let index = 0;

let Total_marks = questions.length         // IT WILL TELL TOTAL NUMBER OF QUESTIONS
let correct  = 0                             // INITIAL VALUE OF RIGHT ANSWER = 0
let wrong  = 0                             // INITIAL VALUE OF WRONG ANSWER = 0

const question_row = document.getElementById('question_row')
const options_row = document.querySelectorAll('.options')
const loadquestions = ()=>{

    if (index == Total_marks){
        return EndQuiz()
    }else{  
    reset()
    const data = questions[index];

    question_row.innerText =  `   ${index+1}) ${data.question}`;   //LINE WILL PRINT QUESTION

    options_row[0].nextElementSibling.innerText = `${data.a}`      //4 LINES WILL SHOW OPTIONS 
    options_row[1].nextElementSibling.innerText = `${data.b}`
    options_row[2].nextElementSibling.innerText = `${data.c}`
    options_row[3].nextElementSibling.innerText = `${data.d}`
    }
}

const sumbitquiz = ()=>{                  // THIS FUNCTION WILL EXCUTE AS WE WILL CILCK ON THE SUMBIT BUTTON
    const ans = getAnswer()
    const data = questions[index]

    if (ans === data.correct){
        correct++
    }else{
        wrong++
    }
    index++;
    loadquestions()
    return;
    
}

const getAnswer = ()=>{  
    let answer;                   //THIS FUNCTION WILL RETURN  OPTION WHICH IS SELECTED
    options_row.forEach(
        (input)=> {
            if (input.checked){
               answer = input.value
            }
        }
    )
    return answer
}

const reset = ()=>{                         // THIS FUNCTION WILL ENSURE THAT WHEN A NEW OPTION
    options_row.forEach(                    // COMES ON THE SCREEN NONE OF ITS OPTIONS IS SELECTD
        (input)=>{                          // WE ARE CALLING THIS FUNCTION AT LINE 49
            input.checked = false
        }
    )
}
 
const EndQuiz = () => {                    // THIS FUNCTION WILL RUN WHEN WE SUMBIT THE LAST QUESTION
    const mainElement = document.getElementsByClassName("box")[0];      
    mainElement.innerText = ` THANK YOU FOR PLAYING THE QUIZ    ${correct}/${Total_marks}  are Correct`;
}

loadquestions()