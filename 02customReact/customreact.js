function customRender(reactElement,container){
   /*
    //Older way:

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)

   */ 

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children')continue;//ye line ignore bhi krr skte h as ab prop k andar children nhi hote
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)


   
}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to get children'
}

const mainContainer=document.getElementById('root')
customRender(reactElement  ,mainContainer)// ("kya inject kru", "kha inject kru")
