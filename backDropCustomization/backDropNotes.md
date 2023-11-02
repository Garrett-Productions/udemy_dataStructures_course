How to Change the Background Image in Visual Studio Code

1. Install the background plugin
Open the Extensions pane and search for the background plugin, install and enable the plugin. 

2. Go to the Settings editor(JSON)
To change the background image in VS Code, you’ll need to go to the Settings editor. There are a few ways to do this:

Press Ctrl + , on your keyboard (or Cmd + , on a Mac) and click on the Edit in settings.json button.
Click on the gear icon in the bottom left corner of the VS Code window and click on the Edit in settings.json button.
Go to Code/File > Preferences > Settings in the top menu and click on the Edit in settings.json button.
Run Cmd/Ctrl + Shift + P and select The Open Settings (JSON) command.

3. Customize the background image
If you don’t like any of the predefined configurations, you can also customize the background yourself. To do this, you just need to update the background section of the settings.json file with the following example;

{
  "background.fullscreen": {
    "image": "https://pathtoimage.png", // url of your image
    // "image": ["https://pathtoimage.png"], // An array may be useful when set interval for carousel
    "opacity": 0.91, // 0.85 ~ 0.95 recommended
    "size": "cover", // also css, `cover` to self-adaption (recommended)，or `contain`、`200px 200px`
    "position": "center", // alias to `background-position`, default `center`
    "interval": 0 // seconds of interval for carousel, default `0` to disabled.
  }
}

* Custom Images 
add these lines

{
  "background.useDefault": false,
  "background.customImages": ["https://a.com/b.png", "file:///Users/somepath/a.jpg"]
}