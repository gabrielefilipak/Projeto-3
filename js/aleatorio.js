export function aletorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}