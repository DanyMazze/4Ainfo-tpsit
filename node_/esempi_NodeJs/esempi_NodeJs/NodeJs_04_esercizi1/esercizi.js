function es1(dato)  {
    r=0;
    if(dato%2==0) {
       r=dato+1;
    } 
    else
    {
       r=dato+2;
    }  
    return r;
}

function es2(dato)  {
  r="";
  for(i=1;i<=10;i++) {
    r=r+(i*dato)+" ";
  }
  return r;
}

function es3(dato)  {
  r="0 1 ";
  a=0;
  b=1;
  c=a+b;
  do {
    r=r+c+" ";
    a=b;
    b=c;
    c=a+b;
  }
  while(c<dato);
  return r;
}

module.exports={dispari:es1,tabellina:es2,fibonacci:es3}
