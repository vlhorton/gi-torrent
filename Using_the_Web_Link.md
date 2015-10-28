# Introduction #

Loading giTorrent from the hosted webserver requires additional settings due to security restrictions in the browser. Beware that opening up the security of your browser may introduce security risks.

# Details #
**FireFox**

Open the webpage 'about:config' and change the setting 'signed.applets.codebase\_principal\_support' to 'true'. You are done now, load giTorrent from the link [giTorrent Live!](http://hhasert.110mb.com/apps/giTorrent.html) and fill in the 'Connections tab'

**Internet Explorer**

In short, you have to add your server and the live site as a trusted domain and enable the 'Access data sources across domains setting' and 'Allow Scriptlets'.

Start Internet Explorer and Select 'Tools', 'Internet options' in the menu bar. Click the 'Security' tab and click the 'Custom Level' button. Scroll through the list until you see 'Access data sources across domains setting', select 'enable'. Scroll through the list until you find 'Allow Scriptlets', select 'enable' then click 'Ok'. You are back at the 'Security' tab, click the 'Sites' button and type the page of your rTorrent serving web server and click the 'Add' button. Do the same for and http://hhasert.110mb.com. You are done now, load giTorrent from the link [giTorrent Live!](http://hhasert.110mb.com/apps/giTorrent.html) and fill in the 'Connections tab'

For additional information and screen shots of making the settings, see [accessing\_data\_across\_subdomains.pdf](http://www.tibco.com/devnet/resources/gi/3_2/tips_and_techniques/accessing_data_across_subdomains32.pdf)