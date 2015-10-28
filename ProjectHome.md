<table cellpadding='20' width='100%'>
<br>
<br>
<TR><br>
<br>
<br>
<br>
<br>
<TD><br>
<br>
<br>
The goal of the project is to build a GUI for <a href='http://libtorrent.rakshasa.no/'>rTorrent</a>  based on the General Interface framework and document the XML definitions for the XMLRPC interfaces needed to call the services. The usage will probably be limited to remote administration over HTTP, so f.i. running rTorrent on NLSU2 with lighttpd as a web server. You need to run a version of rTorrent compiled with XMLRPC enabled, see <a href='http://libtorrent.rakshasa.no/wiki/RTorrentXMLRPCGuide'>rTorrent XMLRPC guide</a>. Second step is setting up your webserver for XMLRPC, see <a href='http://code.google.com/p/gi-torrent/wiki/Config_WebServer'>WiKi</a>.<br>
<br>
The big advantage is that there is no (giTorrent) code running on the rTorrent machine. Once the giTorrent is loaded, it uses XMLRPC calls to rTorrent that use very little resources on the rTorrent server machine. You can find installation instructions for <a href='http://code.google.com/p/gi-torrent/wiki/giTorrent_local_install'>local install</a> and <a href='http://code.google.com/p/gi-torrent/wiki/giTorrent_web_server_install'>webserver install</a> in the Wiki pages. An attempt at a <a href='http://code.google.com/p/gi-torrent/wiki/UserManual'>user manual</a> is available at the Wiki.<br>
<br>
<b>giTorrent Live!</b>

For the lazy ones out there,I have created a web page on a free hosting network that starts giTorrent, so you do not have to install. Downside is :<br>
<ul><li>these free providers have variable uptime<br>
</li><li>they can disable the account without reason<br>
</li><li>they have a download limit<br>
</li><li>they have variable performance (mostly sluggish)<br>
</li><li>this mode requires specific browser settings (see <a href='http://code.google.com/p/gi-torrent/wiki/Using_the_Web_Link'>Wiki</a>)<br>
</li><li>this mode does not allow you to change the initial connection settings</li></ul>

Cool, at least you can checkout the new version before downloading it.<br>
<br>
<a href='http://hhasert.110mb.com/apps/giTorrent.html'>giTorrent Live! (@110Mb)</a>
<br>
<br>
</TD><br>
<br>
<br>
<br>
<TD><br>
<br>
<br>
<wiki:gadget url="http://www.ohloh.net/p/19843/widgets/project_basic_stats.xml" height="220" border="1"/><br>
<br>
<br>
</TD><br>
<br>
<br>
<br>
<br>
</TR><br>
<br>
<br>
</table>
[![](http://bildr.no/thumb/197394.jpeg)](http://bildr.no/view/197394)

---

General Interface is an opensource AJAX framework that provides GUI functionality combined with connectivity to services and a XSLT like mapper. More information on General Interface can be found at [General Interface](http://www.generalinterface.org/).

(General Interface is distributed under the [BSD Open license](http://www.tibco.com/devnet/gi/product_resources35.jsp#BSD), not GPL)