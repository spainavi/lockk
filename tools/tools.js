var tablaElementos = document.getElementById('tabla-elementos');

var txtName= document.getElementById('name');
var txtDescripcion = document.getElementById('descripcion');
var ddlTipo = document.getElementById('tipo');
var txtRenovacion = document.getElementById('renovacion');
var txtPago = document.getElementById('pago');
var txtMail = document.getElementById('mail');
var txtCel = document.getElementById('cel');

var btnAgregar = document.getElementById('agregar');

var datos = [];

function btnEditar_Click(event) {

    txtName.value = this.elemento.name;
    txtRenovacion.value = this.elemento.renovacion;
    txtPago.value = this.elemento.pago;
    ddlTipo.value = this.elemento.tipo;
    txtDescripcion.value = this.elemento.descripcion;
    txtMail.value = this.elemento.mail;
    txtCel.value = this.elemento.cel;

}

function btnAgregar_Click(event) {

    var name = txtName.value || '';
    var renovacion = txtRenovacion.value || '';
    var pago = txtPago.value || '';
    var tipo = ddlTipo.value || '';
    var descripcion = txtDescripcion.value || '';
    var mail = txtMail.value || '';
    var cel = txtCel.value || '';


    if (!name || !name.trim().length) {
        alert('debe ingresar un nombre');
        return;
    }
    if (!renovacion || !renovacion.trim().length) {
        alert('debe ingresar fecha de renovación de poliza');
        return;
    }
    if (!pago || !pago.trim().length) {
        alert('debe ingresar fecha de pago mensual');
        return;
    }
    if (!descripcion || !descripcion.trim().length) {
        alert('debe ingresar una descripcion');
        return;
    }
    if (!mail || !mail.trim().length) {
        alert('debe ingresar un e-mail');
        return;
    }
    if (!cel || !cel.trim().length) {
        alert('debe ingresar un telefono');
        return;
    }

    txtName.value = '';

    txtRenovacion.value = '';

    txtPago.value = '';

    txtDescripcion.value = '';

    txtMail.value = '';

    txtCel.value = '';

    txtName.focus();

    // JSON

    var item = {
        name: name.trim(),
        renovacion: renovacion.trim(),
        pago: pago.trim(),
        descripcion: descripcion.trim(),
        mail: mail.trim(),
        cel: cel.trim(),
        tipo: tipo,
        fecha: new Date()
    };

    datos.push(item);

    //tablaElementos.innerHTML = '';

    while (tablaElementos.childElementCount > 0) {
        tablaElementos.removeChild(tablaElementos.firstElementChild);
    }

    for (var i = 0; i < datos.length; i++) {

        var elemento = datos[i];

        /*
        var fila = '<tr><td>' + elemento.titulo +
                    '</td><td>' + elemento.descripcion +
                    '</td><td>' + elemento.tipo + '</td></tr>';

        tablaElementos.innerHTML += fila;
        */

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);

        td1.textContent = elemento.name;
        td2.textContent = elemento.renovacion;
        td3.textContent = elemento.pago;
        td4.textContent = elemento.tipo;
        td5.textContent = elemento.descripcion;
        td6.textContent = elemento.mail;
        td7.textContent = elemento.cel;

        tablaElementos.appendChild(tr);

        var nuevoBoton = document.createElement('button');
        nuevoBoton.type = 'button';
        nuevoBoton.textContent = 'Editar';

        nuevoBoton.addEventListener('click', btnEditar_Click);
        nuevoBoton.elemento = elemento;
        td8.appendChild(nuevoBoton);

    }

};

btnAgregar.addEventListener('click', btnAgregar_Click);
