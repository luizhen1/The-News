var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    titulo:String,
    imagem:String,
    categoria:String,
    conteudo:String,
    slug:String,
    autor: String,
    views: Number,
    vídeo:String,
    passiva:String,
    imagem2: String,
    imagem3: String,
    q: String,
    imagem4: String,
    w: String,
    imagem5: String,
    e: String,
    imagem6: String,
    r: String,
    titulopassiva: String,
    tituloq: String,
    titulow: String,
    tituloe: String,
    titulor: String,
    conteudo2: String
},{collection:'Posts'})

var Posts = mongoose.model("Posts",postSchema);

module.exports = Posts;