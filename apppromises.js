const users=[{id :1,
  name:'nitish',
  schoolid:101

},{id :2,
  name:'yashika',
  schoolid:101

},{id :3,
  name:'pandey',
  schoolid:999

}];
const grades=[{
  id:1,
  schoolid:101,
  grade:85
},
{
  id:2,
  schoolid:101,
  grade:90
},
{
  id:3,
  schoolid:999,
  grade:98
}];
const getuser=(id)=>
{return new Promise((resolve,reject)=>
  {const user=users.find((user)=>user.id===id);
if (user)
{resolve(user)

}
else {
  reject("unable to find");
}
  });

};

const getgrades=(schoolid)=>
{return new Promise((resolve,reject)=>
{const grade=grades.filter((grade)=>grade.schoolid===schoolid);
  if(grade)
  {
    resolve(grade);
  }
  else {
    reject("unable to find");
  }

});


};

const getstatusalt=async (userid)=>
{
const user=await getuser(userid);
const grades=await getgrades(user.schoolid);
console.log(user);
console.log(grades);
let avg=0;
 if (grades.length>0)
  {
  avg=grades.map((grade)=>grade.grade).reduce((a,b)=>a+b)/grades.length;
  return `${user.name} has a ${avg}`;
  console.log(avg);
}};

getstatusalt(3).then((name)=>
{console.log(name);

}).catch((e)=>
{
console.log(e);
});
//const getstatus=(userid)=>
//{var user;
//  return getuser(userid).then((tempuser)=>
//{user=tempuser;
//  return getgrades(user.schoolid);
//}).then((grades)=>
//{//let avg=0;
// ..... if (grades.length>0)
//  {
  //  avg=grades.map((grade)=>grade.grade).reduce((a,b)=>a+b)/grades.length;
  //}
  //return `${user.name} has a ${avg}`;
  //console.log(avg);

//.//});
//};
//getstatusalt(3).then((status)=>
//{console.log(status);

//}).catch((e)=>
//{
  //console.log(e);
//});
//console.log(getstatusalt());
