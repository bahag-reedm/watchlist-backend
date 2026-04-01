import { Router } from "express";
import { addCommentAndRating } from "../controllers/commentsController.js";
import { getCommentsAndRatingsForMovie } from "../controllers/commentsController.js";
import { deleteCommentAndRating } from "../controllers/commentsController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/comments", protect, addCommentAndRating);
router.get("/comments/:movieId", protect, getCommentsAndRatingsForMovie);
router.delete("/comments/:commentId", protect, deleteCommentAndRating);

export default router;
