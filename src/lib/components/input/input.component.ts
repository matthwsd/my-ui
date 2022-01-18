import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Theming } from '../../helpers/theming.class';

@Component({
  selector: 'my-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent extends Theming implements OnInit, ControlValueAccessor {

  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";

  onChange: any = () => { };
  onTouched: any = () => { };

  Touched: boolean = false;
  InputValue: any = "";
  Disabled: boolean = false;

  @Input() set value(val: any) {
    if (val !== undefined && this.InputValue !== val) {
      this.InputValue = val;
      this.onChange(val);
      this.onTouched(val);
      this.valueChange.emit(val);
    }
  }
  @Output() valueChange = new EventEmitter();

  constructor() {
    super("input");
  }

  writeValue(inputValue: any): void {
    this.value = inputValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {

  }

  onInput(inputElement: EventTarget | null) {
    this.markAsTouched();
    if (inputElement) {
      this.value = (inputElement as HTMLInputElement).value;
    }
  }

  markAsTouched() {
    if (!this.Touched) {
      this.onTouched();
      this.Touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.Disabled = disabled;
  }

}
