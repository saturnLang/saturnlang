const Cookies = {
  cookiesEnabled:function(){
    if(navigator.cookieEnabled)
    {
      alert("is enabled")
    }
  }
}
const cookies = Object.create(Cookies);
const doc = document;
const conf = confirm;
function num(str) {
  const number = 0;
  if (number === null) {
    return this.number;
  }else if(number === undefined){
    return "this.number is undefined";
  }
  return this.number;
}
function a(x){
  const math = 0;
  if(math === null){
    return null;
  }
  if(math === undefined){
    return "this.math is undefined";
  }
  return this.math;
}
function b(bod){
  const Body = document.body;
  if(this.Body === undefined){
    return "Error this.Body is undefined";
  }else if(this.Body === null){
    return "Error this.body is set to null";
  }
  return this.Body;
}
