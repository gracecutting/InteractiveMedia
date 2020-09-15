d3.select("#GuessObject")
    .on("click", function ()
{
    d3.select("#Banner2")
        .text("Change")
})
d3.select("#peacockpic")
  .on("click", function()
{
  d3.select("#banner")  
    .text("I am not the chosen object. Try the object that flies through the air.")
})