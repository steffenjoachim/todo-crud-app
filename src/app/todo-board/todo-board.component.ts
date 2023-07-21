import { Component, Input } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EditDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss']
})
export class TodoBoardComponent {
  @Input() todos$ !: Observable<any[]>;
  todoCollection = collection(this.firestore, 'todo');
  dialog: any;

  constructor(private firestore:Firestore){
    this.getTodos();
  }

  @Input() todo = {
    name: '',
    task: ''
  }

  getTodos(){
    this.todos$ = collectionData(this.todoCollection, {idField: 'id'});
    this.todos$.subscribe((user) =>{
    })
  }

  async getTodo(id: string){
    const todoDoc = doc(this.todoCollection, id);
    const todo = (await getDoc(todoDoc)).data();
    console.log(todo);
  }

  deleteTodo(id:string){
    const todoDoc = doc(this.todoCollection, id);
    deleteDoc(todoDoc);
  }

  updateTodo(todo:any){
    const dialogRef = this.dialog.open(EditDialogComponent, { data: {name: this.todo.name, task: this.todo.task, id: todo.id},});

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      console.log(result);
      this.updateTodo(result);
    })
  }
}
