# Introduction #
The XMLRPC multicall provides a response where multiple entries have the same XML tags. Unfortunately Tibco GI cannot handle this correctly with the default mapper functionality. The trick is to use scripting to get things done.

# Details #
The response looks like this :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodResponse>                                        <-- CDF Document
<params>
 <param>
  <value>
   <array>
    <data>
     <value>                                            <-- CDF Record                                               
      <array>
       <data>                                           <-- script
        <value><string>Some String1</string></value>
        <value><string>Some String2</string></value>
        <value><i8>1</i8></value>
        <value><i8>2</i8></value>
        <value><i8>3</i8></value>
       </data>
      </array>
     </value>
     <value>
      <array>
       <data>
        <value><string>Some String1</string></value>
        <value><string>Some String2</string></value>
        <value><i8>1</i8></value>
        <value><i8>2</i8></value>
        <value><i8>3</i8></value>
       </data>
      </array>
     </value>
    </data>
   </array>
  </value>
 </param>
</params>
</methodResponse>
```

Where each torrent delivers one array of information. In Tibco GI you can use the mapper to map the structure to a CDF document in the data cache. In the mapper you give 'methodResponse' the type 'CDF Document' with a name of f.i. "Downloadlist". The next step is to set the type 'CDF Record' as indicated in the listing. Normally the 'CDF Attribute' can be set on the values returned, but since they have identical tags the mapper overwrites  with the last tag found. Bummer. The latter always means we have to use a manual override and in Tibco GI that is scripting.

The trick is that we treat all the 'value' tags as entries in an array and use 'getValue()' to get at the data. The script in this case is :

```
CDFCONTEXT.setAttribute("FirstString",MESSAGENODE.selectSingleNode("value[1]/*").getValue());
CDFCONTEXT.setAttribute("SecondString",MESSAGENODE.selectSingleNode("value[2]/*").getValue());
CDFCONTEXT.setAttribute("FirstNumber",MESSAGENODE.selectSingleNode("value[3]/*").getValue());
CDFCONTEXT.setAttribute("SecondNumber",MESSAGENODE.selectSingleNode("value[4]/*").getValue());
CDFCONTEXT.setAttribute("ThirdNumber",MESSAGENODE.selectSingleNode("value[5]/*").getValue());
```

The 'CDF Document' is created in the data cache and the entires are addressable by the names we used to identify them as attributes.