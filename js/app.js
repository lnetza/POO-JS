class Product{
    constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class UI{
    addProduct(productAdd){
       const productList= document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML= `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>:${productAdd.name}
                    <strong>Precio</strong>:${productAdd.price}
                    <strong>Año</strong>:${productAdd.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
            `;
            productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            
            this.showMessage('Item eliminado','danger');
        }
    }

    showMessage(message, cssClass){
       const div = document.createElement('div');
       div.className = `alert alert-${cssClass} mt-2`;
       div.appendChild(document.createTextNode(message));
       //MOstrar en DOM
       const container= document.querySelector('.container');
       const app = document.querySelector('#App');

       container.insertBefore(div, app);
       setTimeout( function(){
            document.querySelector('.alert').remove();
       },3000);
    }
}

//Dom events

document.getElementById('product-form')//obtenemos el id de formulario
    .addEventListener('submit', function(e){//Escuchamos y capturampos
        const name= document.getElementById('name').value;
        const price= document.getElementById('price').value;
        const year= document.getElementById('year').value;

        const productAdd = new Product(name, price, year);
        const ui = new UI();

        
        ui.addProduct(productAdd);
        ui.showMessage('Producto agregado correctamente', 'success');
        ui.resetForm();

        e.preventDefault();//cancela el envio de información
    });

document.getElementById('product-list')
    .addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });