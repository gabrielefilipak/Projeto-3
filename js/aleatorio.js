const nomes = ["Gabriele", "Maria", "Jessica", "Marcelo", "Raquel", "Vitória", "Camile"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
