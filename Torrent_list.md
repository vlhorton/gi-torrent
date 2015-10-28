# Introduction #

The syntax for getting a torrent list


# Details #
The way to get a torrent list is to use the d.multicall and specify which fields we are interested in. So the XML would look something like this :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>d.multicall</methodName>
     <params>
       <param>
          <value><string>main</value>                 <-- specify view, f.i. "main"
       </param>
       <param>
          <value><string>d.get_hash=</string></value>
       </param>
       <param>
          <value><string>d.get_name=</string></value>
       </param>
     </params>
</methodCall>
```
This will provide a list of the requested values to be used in the the torrent listing. Beware to get the hash value, this is the key to accessing additional information per torrent.