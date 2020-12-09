Codeigniter - Grocery CRUD
=============

Grocery CRUD is a PHP/Codeigniter Framework library that creates a **full functional CRUD system without the need to customise JavaScript or CSS** on form generation or listing data.

For Original more information, visit http://www.grocerycrud.com

## FEATURES

*  **easy CRUD helper/class with form autogenerator**. to get out that as html page.

## INSTALLING

Comes included with CodeigniterPowered, but for CI2 or CI3:

**Requirements**

* Codeigniter 2.x or 3.x
* PHP 5.3; GD module need for image loading and preview

**Manual controlled install**

**1)** Located your Codeigniter proyect and then download the repository at the `Applications` root directory

`wget https://github.com/codeigniterpower/codeigniter-grocery-crud/archive/master.tar.gz -O ci-grocerycrud.tar.gz`

**2)** Uncompress the downloaded file, the contents must be the files at that places:

* `config/grocery_crud.php` 
* `libraries/Grocery_CRUD.php`
* `libraries/image_moo.php`
* `models/grocery_crud_model.php`

**3)** Then, just In controlers or in the views:
    
``` php
$crud = new grocery_CRUD();
$crud->set_table('customers');
$crud->columns('customerName','phone','addressLine1','creditLimit');
 $output = $crud->render();
 echo $output;
```

Now the output wil renders the table contents as featured html table with input search and edit/add/delete butons.


## CONFIGURATION

Wil be located at the `config/grocery_crud.php` file, and heres the documentation:  https://www.grocerycrud.com/examples/3_lines_only

## USAGE


```php
$crud = new grocery_CRUD();
$crud->set_table('customers')
        ->set_subject('Customer')
        ->columns('customerName','contactLastName','phone','city','country','creditLimit')
        ->display_as('customerName','Name')
        ->display_as('contactLastName','Last Name'); 
$crud->fields('customerName','contactLastName','phone','city','country','creditLimit');
$crud->required_fields('customerName','contactLastName');
$output = $crud->render();
$this->_example_output($output);
```

## Credits

This is specific AD-HOC folk for Codeigniter-powered, see original project for.

- Copyright © John Skoumbourdis - Web-And-Development.com.
