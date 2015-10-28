# Introduction #

giTorrent can be installed on a web server. Unzip the file somewhere in the path where html pages are stored for your web server. On lighttpd this is the "/var/www/" directory. Use a separate directory for Tibco GI stuff so it doesn't get messy.

# Details #

giTorrent is created by using Tibco GI. This framework is very flexible regarding the way you install. This Wiki describes a way to install on a web server.

The installation is very simple indeed. Choose your favorite web server, go to its web pages sharing directory and extract the archive you just downloaded from the download page. You should have 3 directories called "apps", "gi" and "gihome". The direcory "apps" contains "giTorrent.html", the file that triggers the Tibco GI framework to load the actual application. The directory "gi" contains the Tibco GI framework and "gihome" contains the actual application code.

To start giTorrent, just open your browser (FireFox is favorite) point to your webserver and add the path to the file "giTorrent.html" (it is located in the "apps" directory), this will start the application.

giTorrent only supports http connections to rTorrent, so in the "Settings" tab you should enter your url to the rtorrent server, its port and the mount point for XMLRPC. If you configured your webserver with security, enter userid and password. Use the 'View' menu and select the "All" (or another view) option. The top list fills with the running torrents. On selecting a torrent in the list, the information on the tabs is updated for that specific torrent. The 'Tracker' tab will be opened upon selection. This is the least demanding call and I needed to refresh something to avoid confusion. The view menu induces a refresh by selecting the appropriate view. It is only relevant for the list of torrents, the tabbed pages refresh when the tab is clicked.