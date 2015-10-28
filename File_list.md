# Introduction #

The syntax for getting a file list


# Details #
The way to get a file list is to use the f.multicall and specify which fields we are interested in. So the XML would look something like this :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>f.multicall</methodName>
     <params>
       <param>
          <value><string>3C3E07AB344D11F98562F8374C99947698740B84</value>  <-- specify hash
       </param>
       <param>
          <value><string> </string></value>                                <-- left blank
       </param>
       <param>
          <value><string>f.get_path_components=</string></value>
       </param>
       <param>
          <value><string>f.get_priority=</string></value>
       </param>
       <param>
          <value><string>f.get_completed_chunks=</string></value>
       </param>
     </params>
</methodCall>
```

This will provide a list of the requested values to be used in the the file listing. Beware that the hash value is the key to accessing information per torrent.