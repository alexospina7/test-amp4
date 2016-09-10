
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/hello.html'
})

export class AppComponent {
    
    my_firstname: any = '';
    my_lastname: any = '';
    my_phone: any = 1;
    my_password:any='';
    my_email:any='';
}