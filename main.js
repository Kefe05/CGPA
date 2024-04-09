import {data,getIt,cgpaFunc} from './data.js'

window.addEventListener('load',() =>{
let myYear = document.querySelector('#course-semster');
let myCourse =  document.querySelector('#course-input-one');
let inputName = document.querySelector('#name-input');
let form = document.querySelector('#new-task-form');
let holder;
let summation = 0
let myList =[]

form.addEventListener('submit', (e) =>{
e.preventDefault();

holder = getIt(myYear.value,myCourse.value,holder);
console.log(holder);



const main = document.createElement('main');
const subjectHeaderName = document.createElement('h2');

data.forEach((datum) =>{
  if (myCourse.value === datum.course){
    subjectHeaderName.innerHTML = `${datum.course}`
  }
});



main.appendChild(subjectHeaderName);


const subjectHeader = document.createElement('div');
subjectHeader.classList.add('all-subject-header');

const subjectUnit = document.createElement('h3')
subjectUnit.innerHTML='Subject(unit)';

subjectHeader.appendChild(subjectUnit);

const subjectScore = document.createElement('h3');
subjectScore.innerHTML = 'Score' 

subjectHeader.appendChild(subjectScore);

main.appendChild(subjectHeader);

const subjects = document.createElement('div');
subjects.classList.add('all-subjects');

let unitScore = 0


holder.forEach((held) => {
  
  unitScore += held.unit

  const eachSubject = document.createElement('div')
  eachSubject.classList.add('subject-data')
  eachSubject.innerHTML = `${held.name}(${held.unit})`

  const subjectInput = document.createElement('input');

  subjectInput.type = 'text';
  subjectInput.setAttribute('placeholder', 'input your score');
  subjectInput.setAttribute('id', 'score-input');

  const subject = document.createElement('div');
  subject.classList.add('subject');

  subject.appendChild(eachSubject);
  subject.appendChild(subjectInput);

  subjects.appendChild(subject);


  subjectInput.addEventListener('change', () =>{
    myList.push(subjectInput.value)
  })

})


main.appendChild(subjects);



let final= '';



const buttonDiv = document.createElement('div');
buttonDiv.classList.add('submit-button')

const submitScore = document.createElement('button');

buttonDiv.appendChild(submitScore);
main.appendChild(buttonDiv);


submitScore.innerHTML= 'Calculate my score '

submitScore.addEventListener('click', () =>{
  myList.forEach((item) =>{
  let newNumber = Number(item);
  summation = cgpaFunc(unitScore, newNumber, summation);

  })


  final = ((summation/unitScore)).toFixed(2);  

  const finalResult = document.createElement('div');
  finalResult.classList.add('result');

  finalResult. innerHTML = `Hello ${inputName.value},Your CGPA is ${final}`;

  main.appendChild(finalResult);

  
})






document.querySelector('body').appendChild(main);





 
})

})


