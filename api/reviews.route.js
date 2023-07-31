import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router 

// import express from "express"
// import ReviewsCtrl from "./reviews.controller.js"

// const router = express.Router()

// router.route("/").get((req, res) => res.send("hello world"))

// export default router 
// review-backend.imkakerot.repl.co
// 64c349cf1f41c39f1492e2dd
// 64c34cbb1f41c39f1492e2de
// 64c34fe01f41c39f1492e2df