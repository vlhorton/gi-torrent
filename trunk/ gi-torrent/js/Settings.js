jsx3.lang.Package.definePackage(
  "Settings.service",          //the full name of the package to create
  function(service) {          //name the argument of this function

    //call this method to begin the service call (Settings.service.call();)
    service.call = function() {
      var objService = giTorrent.loadResource("Settings_xml");
      objService.setOperation("");

      objService.setEndpointURL(giTorrent.getJSXByName("URI").getValue()+":"+giTorrent.getJSXByName("Port").getValue()+giTorrent.getJSXByName("Mount").getValue());
      objService.setUserName(giTorrent.getJSXByName("UserId").getValue());
      objService.setUserPass(giTorrent.getJSXByName("Password").getValue());

      //subscribe
      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSuccess);
      objService.subscribe(jsx3.net.Service.ON_ERROR, service.onError);
      objService.subscribe(jsx3.net.Service.ON_INVALID, service.onInvalid);

      //PERFORMANCE ENHANCEMENT: uncomment the following line of code to use XSLT to convert the server response to CDF (refer to the API docs for jsx3.net.Service.compile for implementation details)
      //objService.compile();

      //call the service
      objService.doCall();
    };

    service.onSuccess = function(objEvent) {
      //var responseXML = objEvent.target.getInboundDocument();
      var myDoc = giTorrent.getCache().getDocument("Multicall");
      iter = myDoc.selectNodes('//record').iterator();
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Files_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Sock_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Http_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Down#_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Up#_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_Peers_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_SendBuf_t").setValue(val);
      val = iter.next().getAttribute('Result');
      giTorrent.getJSXByName("Max_RcvBuf_t").setValue(val);
      val = iter.next().getAttribute('Result')/1024;
      giTorrent.getJSXByName("Max_Down_t").setValue(val);
      val = iter.next().getAttribute('Result')/1024;
      giTorrent.getJSXByName("Max_Up_t").setValue(val);
      val = iter.next().getAttribute('Result');
      i = 0; 
      while ( val >= 1024 ){ val = Math.round((10*val)/1024)/10; i++; } 
      switch (i) { 
       case 3:  giTorrent.getJSXByName("Max_Memory_t").setValue(val + " Gb") ; break;
       case 2:  giTorrent.getJSXByName("Max_Memory_t").setValue(val + " Mb"); break;
       case 1:  giTorrent.getJSXByName("Max_Memory_t").setValue(val + " Kb"); break;
       default: giTorrent.getJSXByName("Max_Memory_t").setValue(val + " b"); break;
      }
      val = iter.next().getAttribute('Result');
      i = 0; 
      while ( val >= 1024 ){ val = Math.round((10*val)/1024)/10; i++; } 
      switch (i) { 
       case 3:  giTorrent.getJSXByName("Max_Memory_in_use_t").setValue(val + " Gb") ; break;
       case 2:  giTorrent.getJSXByName("Max_Memory_in_use_t").setValue(val + " Mb"); break;
       case 1:  giTorrent.getJSXByName("Max_Memory_in_use_t").setValue(val + " Kb"); break;
       default: giTorrent.getJSXByName("Max_Memory_in_use_t").setValue(val + " b"); break;
      }
      val = iter.next().getAttribute('Result');
      i = 0; 
      while ( val >= 1024 ){ val = Math.round((10*val)/1024)/10; i++; } 
      switch (i) { 
       case 3:  giTorrent.getJSXByName("Safe_Diskspace_t").setValue(val + " Gb") ; break;
       case 2:  giTorrent.getJSXByName("Safe_Diskspace_t").setValue(val + " Mb"); break;
       case 1:  giTorrent.getJSXByName("Safe_Diskspace_t").setValue(val + " Kb"); break;
       default: giTorrent.getJSXByName("Safe_Diskspace_t").setValue(val + " b"); break;
      }
    };

    service.onError = function(objEvent) {
      var myStatus = objEvent.target.getRequest().getStatus();
      objEvent.target.getServer().alert("Error","The service call failed. The HTTP Status code is: " + myStatus);
    };

    service.onInvalid = function(objEvent) {
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };

  }
);

