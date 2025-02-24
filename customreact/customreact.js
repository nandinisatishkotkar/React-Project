
function customRender(reactElement,container){
    /*const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}*/
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.Children
for (const prop in reactElement.props) {
    if (prop==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
    container.appendChild(domElement)
}
}
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    Children:'Click me To visit Goggle'
}
const maincontainer=document.querySelector('#root')

customRender(reactElement,maincontainer)
