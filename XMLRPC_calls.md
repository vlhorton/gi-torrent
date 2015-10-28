# Introduction #
I found a very good reference to the XMLRPC interface with a schema and a DTD made by Elliotte Rusty Harold http://www.cafeconleche.org/books/xmljava/chapters/ch02s05.html.

This information is vital to define the inbound and outbound schemes for XMLRPC in Tibco GI
# Details #
Tibco GI needs XML schemes for inbound and outbound messages, so this information is vital to setting up the rpc invocation and mapping to internal data structures within it.

General XML structure for outbound (request) message :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName/>
     <params>
       <param>
          <value><string /></value>
       </param>
     </params>
</methodCall>
```

General XML structure for inbound (response) message :

```
<?xml version="1.0" encoding="UTF-8"?>
<methodResponse>
   <params>
      <param>
	 <value>
   	   <array>
	     <data>
		<value><string/></value>
	     </data>
	   </array>
	</value>
    </param>
  </params>
</methodResponse>
```