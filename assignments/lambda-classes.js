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
        console.log(listsSubjects.apply(this.favSubjects));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor{
    constructor(PMAttr){
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel){
        console.log (`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(Student, subject){
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
    }
}

