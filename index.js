 function Voiture(name,type,numero){
    this.name = name;
    this.type = type;
    this.numero = numero;
}
var mercedes = new Voiture("audi","cammionnete","2012TAB")
console.log(mercedes)

add_nom = document.querySelector('.addNom')
add_type = document.querySelector('.addType')
add_numero = document.querySelector('.addNumero')
add_bt = document.querySelector('.bt')
add_del = document.querySelector('.del')
add_tr = document.querySelector('.tr')

add_bt.addEventListener('click',function(){
    add_nom = document.querySelector('.addNom').value
    add_type = document.querySelector('.addType').value
    add_numero = document.querySelector('.addNumero').value 
     var nouveau = new Voiture(add_nom,add_type,add_numero)
     add_tr.innerHTML = "<td>"+add_nom+"</td><td>"+add_type+"</td><td>"+add_numero+"</td>"

})
add_del.addEventListener('click',function(){
    add_tr.innerHTML = "<td></td><td></td><td></td>"

}) 


/* Voiture = (name)=>{this.name=name;this.type=type;this.numero=numero} */ /* fonction fleché */