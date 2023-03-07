/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /user':'UserController.getLoginUser',
  'GET /logout':'UserController/logOut',
  'GET /post/:postId/like':'PostController.toggleLike',
  'GET /follow/:followId':'UserController.accountFollow',
  'GET /followings':'UserController.accountFollowingList',
  'GET /follows':'UserController.accountFollowList',
  'GET /post/:postId/likes':'PostController.postLikesList',
  'GET /post/:postId/comments':'CommentController.showComments',

  'POST /register':'UserController/ragisterUser',
  'POST /login':'UserController/loginUser',
  'POST /post/create':'PostController/createPost',
  'POST /post/:postId/comment':'CommentController.postComment'
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
