// CODE here for your Lambda Classes


class Person {
    constructor (AttrPerson){
        this.name = AttrPerson.name;
        this.age = AttrPerson.age;
        this.location = AttrPerson.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor (InstrAttr){
        super(InstrAttr);
        this.specialty = InstrAttr.specialty;
        this.favLanguage = InstrAttr.favLanguage;
        this.catchPhrase = InstrAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade (Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(StudAttr){
        super(StudAttr);
        this.previousBackground = StudAttr.previousBackground;
        this.className = StudAttr.className;
        this.favSubjects = StudAttr.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor{
    constructor(PMAttr){
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const John = new Instructor({
    name: "John",
    age: 31,
    location: "San-Francisko",
    specialty: "Full Stuck",
    favLanguage: "Java",
    catchPhrase: "Just don't forget it!"
});

const Lesley = new Instructor({
    name: "Lesley",
    age: 27,
    location: "Miami",
    specialty: "Full Stuck",
    favLanguage: "Python",
    catchPhrase: "Let me think"
})

const Kate = new Instructor({
    name: "Kate",
    age: 39,
    location: "Las Vegas",
    specialty: "Back-end",
    favLanguage: "PHP",
    catchPhrase: "Just code it!"
})

const Alex = new Student({
    name: "Alex",
    age: 28,
    location: "Chicago",
    specialty: "Full Stuck",
    favLanguage: "CSS",
    catchPhrase: "Let me try to do it by myself firstly.",
    previousBackground: "none",
    className: "WebPT8",
    favSubjects: ["CSS", "HTML", "JavaScript"]
})

const Matt = new Student({
    name: "Matt",
    age: 33,
    location: "Boston",
    specialty: "Front-end",
    favLanguage: "JavaScript",
    catchPhrase: "Have no idea how I did it, but it works!",
    previousBackground: "tester",
    className: "WebFT8",
    favSubjects: ["JavaScript", "CSS"]
})

const Carmen = new ProjectManagers({
    name: "Carmen",
    age: 30,
    location: "Seattle",
    specialty: "Back-end",
    favLanguage: ".Net",
    catchPhrase: "I like it!",
    gradClassName: "WebFT3",
    favInstructor: "Lesley"
})

const Logan = new ProjectManagers({
    name: "Logan",
    age: 40,
    location: "Austin",
    specialty: "Full Stuck",
    favLanguage: "Ruby",
    catchPhrase: "Did you get it?",
    gradClassName: "WebPT1",
    favInstructor: "Kate"
})


console.log(John.specialty);
console.log(Lesley.favLanguage);
console.log(Kate.catchPhrase);
console.log(Alex.location);
console.log(Matt.favSubjects);
console.log(Carmen.favInstructor);
console.log(Logan.gradClassName);
console.log(Alex.speak());
console.log(Lesley.demo("JavaScript"));
console.log(Kate.grade(Matt, "CSS"));
console.log(Alex.listsSubjects());
console.log(Matt.PRAssignment("HTML"));
console.log(Alex.sprintChallenge("JavaScript Fundamentals"));
console.log(Logan.standUp("WebPT8"));
console.log(Carmen.debugsCode(Matt, "JavaScript Fundamentals"));
