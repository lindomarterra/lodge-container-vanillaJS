
function showParagraph(){
    const paragraph= document.getElementById('divParagraphHideShow')
    paragraph.style.display="block"

    const verMenos= document.getElementById('verMenos')
    verMenos.style.display="block"

    const verMais= document.getElementById('verMais')
    verMais.style.display="none"
}


function hideParagraph(){
    const paragraph= document.getElementById('divParagraphHideShow')
    paragraph.style.display="none"

    const verMenos= document.getElementById('verMenos')
    verMenos.style.display="none"

    const verMais= document.getElementById('verMais')
    verMais.style.display="block"
}