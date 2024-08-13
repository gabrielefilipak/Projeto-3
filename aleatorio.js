const nomes = ["Gabriele", "Amanda", "Dabiele", "Marcelo", "Raquel", "Vitória", "Camile"];
export function aletorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);