function drag(e)
{
	e.dataTransfer.setData("image",e.target.id+" "+e.target.parentNode.id);

}
function dragover(e)
{
	e.preventDefault();
}
function drop(e)
{	
	let getdata=e.dataTransfer.getData("image");
	let arrdata=getdata.split(" ");
	let parentid=arrdata[1];

	let parentel=document.getElementById(parentid);
	 
	 let parentchild=parentel.children[0];
	 // store refence of these
	 let storeid=parentchild.id;
	 let storesrc=parentchild.src;
	 // changing id and src of images
	 parentchild.id=e.target.id;
	 parentchild.src=e.target.src;
	 e.target.id=storeid;
	 e.target.src=storesrc;
	e.preventDefault();
}