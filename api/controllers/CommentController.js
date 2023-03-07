/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  postComment:async(req,res)=>{
    try {
      const user = req.user;
      const postId = req.params.postId;
      const post = await Post.findOne({id:postId});
      if (!postId || !post) {
        return res.status(400).send({Message:'Can not find data!'});
      }
      console.log(user.id);
      console.log(post.owner);
      if (post.owner === user.id) {
        return res.status(400).send({Message:'can not comment self!'});
      }
      const comment = req.body.comment;
      await Comment.create({comment,description:req.body.description?req.body.description:undefined,owner:postId}).fetch();
      return res.status(200).send({Message:'comment added!'});
    } catch (error) {
      console.log(error);
      return res.status(500).send({Error:error});
    }
  },
  showCommnets:async(req,res)=>{
    try {
      const postId = req.params.postId;
      const post = await Post.findOne({id:postId}).populate('comments');
      if (!post) {
        return res.status(400).send({Message:'Can not find data!'});
      }
      return res.status(200).send({comments:post.comments});
    } catch (error) {
      console.log(error);
      return res.status(500).send({Error:error});
    }
  }

};

