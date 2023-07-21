import { Component, Input } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  @Input() todos$ !: Observable<any[]>;
  todoCollection = collection(this.firestore, 'todo');

  constructor(private firestore:Firestore){
     
  }
  
  @Input() todo = {
    name: '',
    task: ''
  }

addTodo(){
addDoc(this.todoCollection,this.todo);
this.todo.name = '';
this.todo.task = '';
}

}





