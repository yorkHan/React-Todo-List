import xxx from 'lodash'
import $ from 'jquery'
import foo from './foo'
function component(){
    var element=$('<div></div>')
    element.html(xxx.join(['hello','world'],' '))
    return element.get(0);
}
document.body.appendChild(component());
console.log(foo)
console.log(foo())