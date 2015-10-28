# Introduction #

Two webservers are described in this document, Apache and Lighttpd. The instructions are copied from multiple sources, so thanks to all those authors who have done the nitty gritty for me. (See f.i. http://www.wtorrent-project.org/trac/wiki/wTorrentInstall where most of the basic setup is explained)

# Details #
The setup assumes that rTorrent and XMLRPC is installed correctly. You need at least a web server like Apache of Lighttpd installed to host the interface.

**Using Lighttpd (on Unix)**

(Reference is http://www.lighttpd.net/)

Open the file lighttpd.conf (my installation has it at /etc/lighttpd).
Uncomment (or add) the following line :
```
"mod_scgi",
```

Then add this at the end of your file:
```
scgi.server = (
                "/RPC2" => #RT_DIR
                ("127.0.0.1" =>
                 (
                  "socket" => "/tmp/rpc.socket",        # socket name specified in .rtorrent.rc
                  "check-local" => "disable",
                  "disable-time" => 0  # don't disable scgi if connection fails
                 )))
```
Restart Lighttpd to activate it.

Edit the .rtorrent.rc file (for me in the homedir of the user it runs on).
Add the following lines at the end of the file :
```
scgi_local = /tmp/rpc.socket
```
Restart rTorrent to active the settings. You should see an entry /tmp/rpc.socket when this is succesful. I like the socket approach, because it is more secure than the tcp/ip port. The security settings on the /tmp directory should allow the lighttpd user to read/write to the socket. If this is set incorrectly a record is written in the lighttpd error log (/var/log/lighttpd/error.log).

_Adding security_

I urge you to check the installation without security first to ensure everything is working correctly.

Open the file lighttpd.conf (my installation has it at /etc/lighttpd).
Uncomment (or add) the following line :
```
"mod_auth",
```

Then add this at the end of your file:
```
auth.backend = "htdigest"

auth.backend.htdigest.userfile = "/etc/lighttpd/lighttpd.user.htdigest"

auth.require = ( "/RPC2" =>
 (
  "method" => "basic",
  "realm" => "XML-RPC",
  "require" => "valid-user"
 ))
```


This will instruct Lighttpd to check the file /etc/lighttpd/lighttpd.user.htdigest for userid/passwords.

To create such a file you need tooling (htdigest) from Apache. (Reference is http://trac.lighttpd.net/trac/wiki/Docs%3AModAuth#htdigest) On debian you can install 'apache2-utils' ('apt-get install apache2-utils').

Enter the following command :
```
htdigest -c /etc/lighttpd/lighttpd.user.htdigest 'XML-RPC' 'userid'
```

**Apache**

(Reference is http://httpd.apache.org/)

Install and enable mod\_scgi for apache (if you don't know how to do this refer to your distribution for instructions). Add the following to httpd.conf:
```
SCGIMount /RPC2 127.0.0.1:5000
```

Edit the .rtorrent.rc file (for me in the homedir of the user it runs on).
Add the following lines at the end of the file :
```
scgi_port = localhost:5000
```

For auth with apache you have to create a htpasswd file, which can be done this way:
```
htpasswd -c /path/to/htpasswd username
```

After that add the following to httpd.conf:
```
<Location /RPC2>
AuthName "Private"
AuthType Basic
AuthBasicProvider file
AuthUserFile /path/to/htpasswd
Require user username
</Location>
```