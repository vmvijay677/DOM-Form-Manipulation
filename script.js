var cont = document.createElement('div');
cont.setAttribute('class', 'container');

var row = document.createElement('div');
row.setAttribute('class', 'row');

var column1 = document.createElement('div');
column1.setAttribute('class', 'col-lg-4');

var head1 = document.createElement('h1');
head1.innerHTML = "Form Submission:";
head1.setAttribute('class', 'h1');
column1.append(head1);

var firstname = label('label', 'fname', 'First Name:');
column1.append(firstname);

var br = document.createElement('br');
column1.append(br);

var input1 = foo('input', 'text', 'fname', 'fname', 'Enter text here');
column1.append(input1);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var lastname = label('label', 'lname', 'Last Name:');
column1.append(lastname);

var br = document.createElement('br');
column1.append(br);

var input2 = foo('input', 'text', 'lname', 'lname', 'Enter text here');
column1.append(input2);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var address1 = label('label', 'add1', 'Address Line 1:');
column1.append(address1);

var br = document.createElement('br');
column1.append(br);

var input3 = foo('input', 'text', 'add1', 'add1', 'Enter text here');
column1.append(input3);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var address2 = label('label', 'add2', 'Address Line 2:');
column1.append(address2);

var br = document.createElement('br');
column1.append(br);

var input4 = foo('input', 'text', 'add2', 'add2', 'Enter text here');
column1.append(input4);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var pin = label('label', 'pin', 'Pincode:');
column1.append(pin);

var br = document.createElement('br');
column1.append(br);

var input5 = foo('input', 'number', 'pin', 'pin', 'Enter number here');
column1.append(input5);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var gender = label('label', 'gender', 'Gender:');
column1.append(gender);

var br = document.createElement('br');
column1.append(br);

var input6 = foo('input', 'radio', 'gender', 'male', '');

var male = label('label', 'male', '&nbsp; Male &nbsp; &nbsp;');

var input7 = foo('input', 'radio', 'gender', 'female', '');

var female = label('label', 'female', '&nbsp; Female');
column1.append(input6, male, input7, female);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var food = label('label', 'food', 'Choice of Food (must choose atleast 2 out of 5 options):');
column1.append(food);

var br = document.createElement('br');
column1.append(br);

var input8 = foo('input', 'checkbox', 'food', 'north', '');

var north = label('label', 'north', '&nbsp; North Indian');
column1.append(input8, north);

var br = document.createElement('br');
column1.append(br);

var input9 = foo('input', 'checkbox', 'food', 'south', '');

var south = label('label', 'south', '&nbsp; South Indian');
column1.append(input9, south);

var br = document.createElement('br');
column1.append(br);

var input10 = foo('input', 'checkbox', 'food', 'japan', '');

var japan = label('label', 'japan', '&nbsp; Japanese');
column1.append(input10, japan);

var br = document.createElement('br');
column1.append(br);

var input11 = foo('input', 'checkbox', 'food', 'china', '');

var china = label('label', 'china', '&nbsp; Chinese');
column1.append(input11, china);

var br = document.createElement('br');
column1.append(br);

var input12 = foo('input', 'checkbox', 'food', 'tand', '');

var tand = label('label', 'tand', '&nbsp; Tandoori');
column1.append(input12, tand);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var state = label('label', 'state', 'State:');
column1.append(state);

var br = document.createElement('br');
column1.append(br);

var input13 = foo('input', 'text', 'state', 'state', 'Enter text here');
column1.append(input13);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var country = label('label', 'country', 'Country:');
column1.append(country);

var br = document.createElement('br');
column1.append(br);

var input14 = foo('input', 'text', 'country', 'country', 'Enter text here');
column1.append(input14);

var br = document.createElement('br');
column1.append(br);

var br = document.createElement('br');
column1.append(br);

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('class', 'btn btn-primary');
submit.setAttribute('value', 'Submit');
submit.addEventListener('click', insert);
submit.addEventListener('click', clear);
column1.append(submit);

var column2 = document.createElement('div');
column2.setAttribute('class', 'col-lg-8');

var head2 = document.createElement('h1');
head2.innerHTML = "Temporary Database:";
head2.setAttribute('class', 'h2');
column2.append(head2);

var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead-dark');

var tr = document.createElement('tr');
var th1 = createelement('th', 'First Name');
var th2 = createelement('th', 'Last Name');
var th3 = createelement('th', 'Address Line 1');
var th4 = createelement('th', 'Address Line 2');
var th5 = createelement('th', 'Pincode');
var th6 = createelement('th', 'Gender');
var th7 = createelement('th', 'Food');
var th8 = createelement('th', 'State');
var th9 = createelement('th', 'Country');
tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);
thead.append(tr);


table.append(thead);
column2.append(table);

row.append(column1,column2);
cont.append(row);
document.body.append(cont);

//-------------------------------------------->

function label(elename, f, c){
    let label = document.createElement(elename);
    label.setAttribute('for', f);
    label.innerHTML = c;
    return label;
}

function foo(elename, t, n, id, ph){
    let input = document.createElement(elename);
    input.setAttribute('type', t);
    input.setAttribute('name', n);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', ph);
    return input;
}

function createelement(elename, value){
    var element = document.createElement(elename);
    element.innerHTML = value;
    return element;
}

function insert(){
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td1 = createelement('td', document.getElementById("fname").value);
    var td2 = createelement('td', document.getElementById("lname").value);
    var td3 = createelement('td', document.getElementById("add1").value);
    var td4 = createelement('td', document.getElementById("add2").value);
    var td5 = createelement('td', document.getElementById("pin").value);
    var td6 = createelement('td', gender());
    var td7 = createelement('td', food());
    var td8 = createelement('td', document.getElementById("state").value);
    var td9 = createelement('td', document.getElementById("country").value);

    function gender(){
        var x = document.getElementById("male");
        var y = document.getElementById("female");
        if(x.checked === true){
            return "Male";
        } else if(y.checked === true){
            return "Female";
        } else{
            return "";
        }
    }

    function food(){
        var a = document.getElementById("north");
        var b = document.getElementById("south");
        var c = document.getElementById("japan");
        var d = document.getElementById("china");
        var e = document.getElementById("tand");
        if(a.checked === true){return "North Indian";} 
        else if(b.checked === true){return "South Indian";}
    }

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    tbody.append(tr);
    table.append(tbody);
    return table;
}

function clear(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("add1").value = "";
    document.getElementById("add2").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("male").value = "";
    document.getElementById("female").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
}