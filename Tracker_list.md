# Introduction #

The syntax for getting a tracker list


# Details #
The way to get a peer list is to use the t.multicall and specify which fields we are interested in. So the XML would look something like this :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>t.multicall</methodName>
     <params>
       <param>
          <value><string>3C3E07AB344D11F98562F8374C99947698740B84</value>  <-- specify hash
       </param>
       <param>
          <value><string> </string></value>                                <-- left blank
       </param>
       <param>
          <value><string>t.get_url=</string></value>
       </param>
       <param>
          <value><string>t.get_type=</string></value>
       </param>
     </params>
</methodCall>
```

This will provide a list of the requested values to be used in the the tracker listing. Beware that the hash value is the key to accessing information per torrent.
Most queries deliver a value rather that a string :

t.get\_type      ->    1 = HTTP     2 = UDP      3 = DHT