# Introduction #

# Details #
rTorrent allows you to get multiple variables in a single call. The syntax is slightly different from a single operation :

```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName/>
     <params>
       <param>
          <value><string /></value>
       </param>
       <param>
          <value><string /></value>
       </param>
       <param>
          <value><string /></value>
       </param>
     </params>
</methodCall>
```
For a download list, the methodName contains the text "d.multicall", the first string the text "main" (the view you would like to use) and the additional strings contain the variables you would like to be returned (example "d.get\_name=" or "d.get\_size\_bytes=").

The response is an array of arrays. Depending on the returned values, the inner array contains strings or i8 type fields (example) :
```
<?xml version="1.0" encoding="UTF-8"?>
<methodResponse>
<params>
  <param>
   <value>
    <array>
     <data>
      <value>
       <array>
        <data>
         <value><string /></value>
         <value><i8 /></value>
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