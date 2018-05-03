import AV from 'leancloud-storage'

var APP_ID = 'M9QQLN7KtQwtcCgoeHKCxf0X-gzGzoHsz';
var APP_KEY = 'bQvAndiaTFoIlQgWpL2mWabK';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export function signUp(email,username,password,successFn,errorFn) {
  var user=new AV.User()
  user.setUsername(username)
  user.setPassword(password)
  user.setEmail(email)
  user.signUp().then(function (loginUser) {
    let user=getUserFromAVUser(loginUser)
    successFn.call(null,user)
  },function (error) {
    errorFn.call(null,error)
  })
  return undefined
}

export function signIn(username,password,successFn,errorFn) {
  AV.User.logIn(username,password).then(function (loginedUser) {
    let user=getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  },function (error) {
    errorFn.call(null,error)
  })
}

export function getCurrentUser(){
  let user=AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }else{
    return null
  }
}

export function signOut() {
  AV.User.logOut()
  return undefined
}


export function sendPasswordResetEmail(email,successFn,errorFn) {
  AV.User.requestPasswordReset(email).then(function (success) {
    let user=getUserFromAVUser()
      successFn.call()
  },function (error) {
      console.log(error)
  })
}

function getUserFromAVUser(AVUser) {
  return{
    id:AVUser.id,
    ...AVUser.attributes
  }
}