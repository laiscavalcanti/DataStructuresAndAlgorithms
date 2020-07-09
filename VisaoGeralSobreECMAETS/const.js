const frameworkJs = {
  name: "React"
};

console.log(frameworkJs.name = 'Vue') // but in this case, the value 'name' has been modificated
//that happens because working with objects in own properties is allowed new values.

frameworkJs ={
    name: 'Vue'
}; // this output will be `framework is read-only` that happens because it's not possible to atribute another reference to object

