let person2 = {
  id: "01",
  nome: "marco",
  nickname:"ciccio",
  message:"ciao questo è la prima chat",
  color: "FFFFFF",
  font:"Arial",
  fullDataString: function() {
    return this.id + " " + this.nome+ " " +this.nickname+" "+ this.message+" "+ this.color+" "+ person2.font;
  }
};
module.exports=person2;


