function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    document.innerHtml=react    
}


const reactElement={
    type:'a',
    props:{
        href:'google.com',
        target:'_blank'
    },
    children:'click me to get children'
}

const mainContainer=document.getElementById('root')
customRender(reactElement  ,mainContainer)
