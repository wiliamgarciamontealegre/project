
/* Obtenemos los valores del selector
@data, (object) objecto a recorrer para obtener los items
*/
export function getData(data){
    let itemData = [];
    data.map(item => {
        itemData.push({label: item.versions[0].name, id: item.versions[0].id})
    })
    return itemData;
}