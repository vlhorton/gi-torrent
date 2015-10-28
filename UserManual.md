# Introduction #

This is the first attempt to create a user manual for giTorrent.


# Details #
**Config File (0.6.6 and up)**

In the directory gihome/JSXAPPS/giTorrent/ there are 2 config files. The one called  giTorrentConfig.xml contains the variables that are used to configure the startup parameters. The default file looks like this :
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<data>
<property 

url="http://my.torrent.server"
port="80"
mount_point="/RPC2"
userid = ""
password = "" 
hide_connection = "no"
hide_settings = "no"
refresh = "no"
interval = "10"
view = "None"

/>
</data>
```

Most of the variables will be evident, but some parameters need additional explanation. The hide\_connection and hide\_settings parameters allow you to hide the connection and settings tabs when the value is "yes". Refresh, interval and view will enable you to set auto-refresh, the interval and starting a view at startup. This will only work when the connection parameters are sufficient to successfully connect to rTorrent. The view parameter is filled with the view as seen in the view menu.

**Setting up the connection**

The connection tab contains the information for giTorrent to reach rTorrent on the server. There are 5 parameters to set :

  * URL              The url that points to your webserver.
  * Port               The port that your webserver uses, default port 80.
  * Mount Point  The link to the RPC interface, default '/RPC2'.
  * UserID          The userid defined in the webserver if you enabled security.
  * Password     The password defined in the webserver if you enabled security.

See [Web Server Install](http://code.google.com/p/gi-torrent/w/edit/giTorrent_web_server_install) for details.

**Getting a Torrent list**

rTorrent is based on views to show the active torrents. The default views are supported in giTorrent:

  * All             All the torrents in the list, actually the 'main' view in rTorrent.
  * Started    All the torrents that are active.
  * Stopped  All the torrents that are inactive.
  * Hashing  All the torrents that are hashing or waiting for hashing.
  * Seeding  All the torrents that are fully downloaded and seeding.

giTorrent has these views accessable through the 'View' menu. Choosing a view from the menu gets the information from rTorrent, so initially the list is empty until a view is selected.

In general every action on a torrent starts from selecting it in the torrent list. The default action on selecting a torrent is opening the tracker tab and collecting information on the torrent. Every time a tab is clicked (apart from the 'Add Torrent' tab ofcourse) the content is refreshed from the server.

**Auto-Refresh**

In the settings tab there is an option to enable the auto-refresh function. The Refresh listbox enables you to select a refresh interval in seconds. Checking the Auto-Refresh checkbox will enable auto refresh. After checking the box you need to select the view you want auto-refresh to be active on.

Auto refresh is cancelled by deselecting the checkbox. Other actions like selecting a different view, selecting a torrent or changing the refresh interval will continue auto refresh.

The Peer list will always auto refresh and uses the same refresh setting.

**Start/Stop/Hash/Erase a torrent**

Select a torrent and open the 'Action' menu. You can select the action from a menu item:

  * Start     Start the torrent
  * Stop     Stop the torrent
  * Hash    Initiate hash checking for the torrent
  * Erase   Erase the torrent

**Changing torrent priorities**

Select a torrent and open the 'Priority' menu. You can set priority by selecting a menu item. The 'Off' priority is a special case, no download slots are assigned to the torrent, but it can still be downloaded due to unused slots.

**Getting information on the tracker**

The tracker tab contains a list of trackers and information on the torrent, like the date it was created and the size of the torrent chunks. It also shows how much diskspace is available on the disk where torrents are stored.

The list contains information per associated tracker. If the trackers provides scrape information, the number of seeds and leeches it has registered will be shown. rTorrent does not actively perform scraping (yet), so the information might not be present (as shown by a question mark).

**Changing File Priorities**

Select a torrent from the torrent list and click the Files tab. The tab will fill with a list of the files for this torrent. Select a file from the list and open the 'File Priority' menu. Choose a priority from the menu. You can also set the file to 'Do not Download', so it will not get downloaded by rTorrent (duh). It is advisable to disable auto refresh before changing the file priority. Due to refresh activity there is some interference between the listings and the service calls.

**Adding a Torrent**

Select the 'Add Torrent' tab and paste the location for the torrent file in the URL field. If the torrent server needs a userid/password you supply it in the appropriate fields. Press the 'Add Torrent' button to send the request to rTorrent. A succesful send will trigger a dialog box. It takes a few seconds for rTorrent to download the torrent file, so refreshing the view after a while will show the started torrent.

**Changing the upload/download settings**

rTorrent has the ability to limit the upload and download speed. In the 'Settings' tab you will see both settings from the .rtorrent.rc file, the memory usage and the settings for upload/download speed. You can change the settings for the limits by editing the text box to the desired value and clicking the associated button to update rTorrent.

rTorrent uses mmap() to map file blocks to memory. This is like OS swapping, but in the scope of the application. There is a maximum size to the memory that can be mmap-ed which is set n the .rtorrent.rc file. The 'Settings' tab contains information on the setting and the actual usage of this type of memory. Like swap space, there is no 1:1 relation between physical memory and the mmap() memory.

**Graph**

The graph tab shows the upload and download speed in kB/s. Every refresh interval the measured values are added to the graph until a max of 100 measurements. The graph scales all measurements to 100%, the density of the interval ticks on the x-axis shows how many are actually in the graph.