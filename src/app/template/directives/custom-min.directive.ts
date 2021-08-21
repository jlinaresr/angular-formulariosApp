import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    // Condiciones que debe tener el elemento HTML
    selector: '[customMin][ngModel]',
    // Dependencias en las que se expande la funcionalidad
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {
    
    // Forma de recibir el valor
    @Input() minimo!: number;

    constructor() {}

    // Función que hará la validación del control HTML
    validate( control: FormControl ){
        const inputValue = control.value;

        console.log(inputValue);
        console.log('min', this.minimo);

        return ( inputValue < this.minimo )
                    ? {'customMin': true}
                    : null;
    }

}