import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    /*
    this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is Brad',
        hide: true
      },
      {
        text:'What is your favorite color?',
        answer: 'My favorite color is red',
        hide:true
      },
      {
        text:'What is your favorite language?',
        answer: 'My favorite language is JavaScript',
        hide:true
      }
    ];
    */
  }

  //Get Questions from local Storage
  getQuestions(){
    if(localStorage.getItem('questions')===null){
      this.questions=[];
    } else{
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  //Add question to local Storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    //init local variable
    let questions;

    if(localStorage.getItem('questions')===null){
      questions=[];
      //push new question
      questions.unshift(question);
      //set new array to LS
      localStorage.setItem('questions',JSON.stringify(questions));
    } else{
      questions=JSON.parse(localStorage.getItem('questions'));
      //Add new Question 
      questions.unshift(question);
      //Re set LS
      localStorage.setItem('questions',JSON.stringify(questions)); 
    }
  }

  //Remove from local storage
  removeQuestion(question:Question){
    for(let i=0;i<this.questions.length;i++){
      if(question==this.questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }
}
