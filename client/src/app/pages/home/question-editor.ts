import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { categories, Question } from '../../services/quiz.models';
import { QuizStore } from '../../services/quiz-store';
import { ModalFocus } from '../../services/modal-focus';

@Component({
  selector: 'app-question-editor',
  imports: [FormsModule, ModalFocus],
  templateUrl: './question-editor.html',
  styleUrl: './question-editor.css',
})
export class QuestionEditor implements OnInit {
  readonly question = input<Question | null>(null);
  readonly closed = output<void>();
  readonly store = inject(QuizStore);
  readonly categories = categories;
  text = '';
  category = 'Generale';
  options = ['', '', '', ''];
  correct = -1;
  submitted = false;

  ngOnInit(): void {
    const question = this.question();
    if (question) {
      this.text = question.text;
      this.category = question.category;
      this.options = [...question.options];
      this.correct = question.correct;
    }
  }

  get valid(): boolean {
    const options = this.options.map(option => option.trim().toLocaleLowerCase());
    return !!this.text.trim() && options.every(Boolean)
      && new Set(options).size === options.length && this.correct >= 0
      && this.correct < this.options.length;
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
    if (this.correct === index) this.correct = -1;
    else if (this.correct > index) this.correct--;
  }

  save(): void {
    this.submitted = true;
    if (!this.valid) return;
    if (this.store.save({
      id: this.question()?.id ?? crypto.randomUUID(),
      text: this.text.trim(), category: this.category,
      options: this.options.map(option => option.trim()), correct: this.correct,
    })) this.closed.emit();
  }
}
