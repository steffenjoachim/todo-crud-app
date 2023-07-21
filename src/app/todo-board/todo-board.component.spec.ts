import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardComponent } from './todo-board.component';

describe('TodoBoardComponent', () => {
  let component: TodoBoardComponent;
  let fixture: ComponentFixture<TodoBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBoardComponent]
    });
    fixture = TestBed.createComponent(TodoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
