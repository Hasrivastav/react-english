

function  customComponent(reactElement,mainContainer){
    // const element = document.createElement(reactElement.type);
    // element.innerHTML = reactElement.children
    // element.setAttribute('href',reactElement.props.href)
    // element.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(element)

    const docElement = document.createElement(reactElement.type)
    docElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        docElement.setAttribute(prop,reactElement.props[prop])
      
    }
    mainContainer.appendChild(docElement)


}

const reactElement = {
    type:'a',
    props:{
        href: 'https://www.google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}




const mainContainer = document.querySelector("#root");
customComponent(reactElement,mainContainer)

