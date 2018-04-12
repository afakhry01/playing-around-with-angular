import { AbstractControl, ValidationErrors } from "@angular/forms";

export class oldPasswordValidator {
    static checkOldPassword(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({checkOldPassword: true});
                resolve(null);
            },500);
        });
    }
}