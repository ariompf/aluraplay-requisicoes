//Servidor
async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
    //console.table(conexaoConvertida);
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method:'POST',
        headers: {
            'Content-type': 'aplication/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
};

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos/?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
} //essa função está me mostrando todos os vídeos em vez de um só referente a busca: revisar aulas

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}