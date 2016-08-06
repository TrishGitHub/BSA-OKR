const router = require('express').Router();

router.post('/', (req, res, next) => {
	//Comment create
});

router.put('/:id', (req, res, next) => {
	//Get comments by objective id
	 console.log("comment update");
});

router.get('/objective/:id', (req, res, next) => {
	//Get comments by objective id
	 console.log("Get comments by objective id");
});

router.get('/objective/:id', (req, res, next) => {
	//Get comments by objective id
});

router.delete('/:id', (req, res, next) => {
	//Delete comment
});

module.exports = router;