import xxx from 'lodash'
import $ from 'jquery'
function component(){
    var element=$('<div></div>')
    element.html(xxx.join(['hello','world'],' '))
    return element.get(0);
}
document.body.appendChild(component());