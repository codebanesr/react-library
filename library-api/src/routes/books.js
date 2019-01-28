const router = express.Router()



router.use(authenticate);


router.get("/", (req, res) => {
    Book.find({ userId: req.currentUser._id}).then(books => res.json({ books }));
})



router.post("/", (req, res)=>{
    Book.create({ ...req.body.book, userId: req.currentUser._id })
    .then(book=>res.json({book}))
    .catch(err=> res.status(400).json)
})


router.get('/search', (req, res) => {
    axios.get(`http://www.goodreads.com/book/show.xml?key=${process.env.GOODREADS_KEY}`).then(result => 
        parseString(result, (err, goodreads) => {
            const numPages = goodreads
        })
    )
})


