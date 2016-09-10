import { Component } from 'angular2/core';

@Component({
    selector: 'tag-index',
    templateUrl: 'src/templates/product.html'
})

export class Product {
    my_name = 'Alexander';
   	my_type = 'Tipo';
	my_price = 10000000;
 	my_quantity = 5;

}