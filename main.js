const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const menu = electron.Menu

let win ;

function createWindow() 
{ 
	 win = new BrowserWindow();

	 win.loadURL(url.format({
		       pathname: path.join(__dirname, 'index.html'),
		       protocol: 'file',
		       slashes : true  
	         })

	 );

	 win.on('closed', ()=>{

	          win = null;

	          }
	 );



}
app.on('ready', function(){

	createWindow()
	const template = [
		{
			label:'demo',
			 submenu : [
			 		{
			 			label : "submenu 1",
			 			click : function(){
			 				console.log('clicked menu 1')
			 			}
			 		},
			 		{
			 			label : "submenu2",
			 			click : function(){
			 				console.log('clicked menu 2')
			 			}
			 		}
			 ]
		}
	]
	const appmenu = menu.buildFromTemplate(template)

	menu.setApplicationMenu(appmenu)



});
app.on('window-all-closed', ()=>{

  if(process.platform !== 'darwin'){
  	  app.quit;
     }
  	
 }

 );

app.on('activate', ()=> {
      
      if (win === null)
      {
      	 createWindow
      }

     }
);
