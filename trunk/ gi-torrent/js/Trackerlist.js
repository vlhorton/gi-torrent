jsx3.lang.Package.definePackage(
  "Trackerlist.service",                //the full name of the package to create
  function(service) {          //name the argument of this function

    //call this method to begin the service call (Trackerlist.service.call();)
    service.call = function() {
      var objService = giTorrent.loadResource("Tracker_xml");
      objService.setOperation("");

      objGUI = giTorrent.getServer().getCache().clearById("Tracker_list");
      giTorrent.getJSXByName("matrix4").repaint();
      
      objGUI = giTorrent.getJSXByName("matrix1"); 
      Val = objGUI.getRecord(objGUI.getValue()).Hash;
      giTorrent.getJSXByName("Hash").setValue(Val);
      Val = objGUI.getRecord(objGUI.getValue()).Tied_File;
      giTorrent.getJSXByName("Tied_File").setValue(Val);
      Val = objGUI.getRecord(objGUI.getValue()).Dir;
      giTorrent.getJSXByName("Dir").setValue(Val);
      Val = objGUI.getRecord(objGUI.getValue()).Creation_Date;
      giTorrent.getJSXByName("Creation_Date").setValue(Val);
      Val = objGUI.getRecord(objGUI.getValue()).Creation_Time;
      giTorrent.getJSXByName("Creation_Time").setValue(Val);

      Val = objGUI.getRecord(objGUI.getValue()).Chunk_size;
      i = 0; 
      while ( Val >= 1024 ){ Val = Math.round((10*Val)/1024)/10; i++; } 
      switch (i) { 
      case 3:  giTorrent.getJSXByName("Chunk_size").setValue(Val + " Gb") ; break;
      case 2:  giTorrent.getJSXByName("Chunk_size").setValue(Val + " Mb"); break;
      case 1:  giTorrent.getJSXByName("Chunk_size").setValue(Val + " Kb"); break;
      default: giTorrent.getJSXByName("Chunk_size").setValue(Val + " b"); break;
      }
      Val = objGUI.getRecord(objGUI.getValue()).Free_Diskspace;
      i = 0; 
      while ( Val >= 1024 ){ Val = Math.round((10*Val)/1024)/10; i++; } 
      switch (i) { 
      case 3:  giTorrent.getJSXByName("Free_Diskspace").setValue(Val + " Gb") ; break;
      case 2:  giTorrent.getJSXByName("Free_Diskspace").setValue(Val + " Mb"); break;
      case 1:  giTorrent.getJSXByName("Free_Diskspace").setValue(Val + " Kb"); break;
      default: giTorrent.getJSXByName("Free_Diskspace").setValue(Val + " b"); break;
      }
      Val = objGUI.getRecord(objGUI.getValue()).Message;
      giTorrent.getJSXByName("Message").setValue(Val);


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
      giTorrent.getJSXByName("matrix4").repaint();
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

