import xxx from 'lodash'
function component(){
    var element=document.createElement('div')
    element.innerHTML=xxx.join(['hello','world'],' ');
    return element;
}
document.body.appendChild(component());