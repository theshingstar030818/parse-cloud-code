// Parse.Cloud.define('hello', function(req, res) {
//   res.success('Hi');
// });

Parse.Cloud.define("hello", async (request) => {
  console.log("hellooooo called");
  return "123123123";
});

Parse.Cloud.afterSave(Parse.User, async (request) => {
  // code here
})
