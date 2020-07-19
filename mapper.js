let nodes = [{
   title:"Therese",
   clan:"tremere" 
},{
    title:"Jeanette",
    clan:"malkavian"
}];

let relations = [{parent:0,children:[
    {to:1,type:"\"Sister\" (Second Personality)"}
]}];
//https://whitewolf.fandom.com/wiki/Vampire:_The_Masquerade_symbols
let clanImages = {
    brujah:"https://vignette.wikia.nocookie.net/whitewolf/images/0/0b/SymbolClanBrujahV5.png",
    gangrel:"https://vignette.wikia.nocookie.net/whitewolf/images/d/d8/SymbolClanGangrelV5.png",
    malkavian:"https://vignette.wikia.nocookie.net/whitewolf/images/d/d2/SymbolClanMalkavianV5.png",
    nosferatu:"https://vignette.wikia.nocookie.net/whitewolf/images/6/6e/SymbolClanNosferatuV5.png",
    toreador:"https://vignette.wikia.nocookie.net/whitewolf/images/c/c3/SymbolClanToreadorV5.png",
    tremere:"https://vignette.wikia.nocookie.net/whitewolf/images/7/7b/SymbolClanTremereV5.png",
    ventrue:"https://vignette.wikia.nocookie.net/whitewolf/images/a/ad/SymbolClanVentrueV5.png"
};

let printMap = function(){
    relations.forEach((node)=>{
        console.log(`${nodes[node.parent].title} is ${nodes[node.children[0].to].title}s ${node.children[0].type}`);
    });
    constructNode(nodes[0]);
}

let constructNode=function(node){
    let template = `
    <figure class="image is-128x128">
        <img class="is-rounded" style="margin:auto;height:128px;width:auto" src="${clanImages[node.clan]}">
    </figure>`;
    $('#map').append(template);
}