import { Component, OnInit  } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  sku: AbstractControl;
  description: AbstractControl;

  productName: string;

  constructor(fb: FormBuilder) {
    function skuValidator(control: FormControl): { [s: string]: boolean } | null {
      if (!control.value.match(/^123/)) {
        return { invalidSku: true };
      }
      return null;
    }

    this.myForm = fb.group({
      'sku':         [ '', Validators.compose([ Validators.required, skuValidator ]) ],   // ['Default SKU',         Validators.required],
      'description': [ '', Validators.required ]                                          // ['Default description', Validators.required],
    });

    this.sku = this.myForm.controls['sku'];
    this.description = this.myForm.controls['description'];

    this.productName = "Bla Bla Bla Product Name Ta da";

    // valueChanges is an Observable EventEmitter, so it is possible to subscribe a function to it

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    if(!this.myForm.valid) {
      console.log('form is invalid', value);

      if(!this.sku.valid) {
        console.log('  sku is invalid');
      }
      if(!this.description.valid) {
        console.log('  description is invalid');
      }

      return;
    }

    console.log('You submitted value: ', value);
  }

}
