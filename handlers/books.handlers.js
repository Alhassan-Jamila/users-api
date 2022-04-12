const books = require ("../data/books")

const booksHandlers ={};

booksHandlers.byCategory = (req, res, next)=>{
    const category = req.quire.category;
    if (category){
        let _books =books.filter((b)=>b.category == category);
        return res.ststus(200).json({success:true, data:_books})
    }
    next()
};

booksHandlers.byAuthor = (req, res, next)=>{
    const author = req.quire.category;
    if (author){
        let _author =books.filter((b)=>b.author == author);
        return res.ststus(200).json({success:true, data:_author})
    }
    next()
};
module.exports =booksHandlers