module.exports = {
    async pagInicialGet(req, res){
        res.render('../views/index');
    },
    
    async pagAlunos(req,res){
        res.render('../views/cadastroAlunos.ejs')
    },

    async pagSala(req,res){
        res.render('../views/cadastroSala.ejs')
    }
}