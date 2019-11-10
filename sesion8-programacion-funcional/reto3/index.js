const helados = [
    {sabor: 'vainilla', color: 'amarillo'},
    {sabor: 'fresa', color: 'rojo'},
    {sabor: 'chocolate', color: 'café'},
    {sabor: 'mora', color: 'morado'},
    {sabor: 'menta', color: 'verde'},
    {sabor: 'pistache', color: 'verde'},
]

const saboresVerdes = helados.filter(e => e.color === 'verde')

console.log(saboresVerdes)
console.log()
console.log(helados)