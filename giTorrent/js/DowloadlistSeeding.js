jsx3.lang.Package.definePackage(
  "downloadlistSeeding.service",                //the full name of the package to create
  function(service) {          //name the argument of this function
    //call this method to begin the service call (downloadlistSeeding.service.call();)
    service.call = function() {
      var objService = giTorrent.loadResource("DownloadlistSeeding_xml");
      objService.setOperation("");
      TimeoutID = giTorrent.getJSXByName("TimeoutID").getValue();
      if ( TimeoutID ) window.clearTimeout(TimeoutID);
      objGUI = giTorrent.getServer().getCache().clearById("Peer_list");
      objGUI = giTorrent.getServer().getCache().clearById("Tracker_list");
      objGUI = giTorrent.getServer().getCache().clearById("File_list");
      objGUI = giTorrent.getServer().getCache().clearById("Speed");
      objService.setEndpointURL(giTorrent.getJSXByName("URI").getValue()+":"+giTorrent.getJSXByName("Port").getValue()+giTorrent.getJSXByName("Mount").getValue());
      objService.setUserName(giTorrent.getJSXByName("UserId").getValue());
      objService.setUserPass(giTorrent.getJSXByName("Password").getValue());
      //subscribe
      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSuccess);
      objService.subscribe(jsx3.net.Service.ON_ERROR, service.onError);
      objService.subscribe(jsx3.net.Service.ON_INVALID, service.onInvalid);
      //PERFORMANCE ENHANCEMENT: uncomment the following line of code to use XSLT to convert the server response to CDF (refer to the API docs for jsx3.net.Service.compile for implementation details)
      //objService.compile();
      if (  giTorrent.getJSXByName("Refresh").getChecked() )
      {
         TimeoutID = window.setTimeout(downloadlistSeeding.service.call, giTorrent.getJSXByName("Refresh_Interval").getValue() * 1000);
         giTorrent.getJSXByName("TimeoutID").setValue(TimeoutID);
      } 
      //call the service
      objService.doCall();
    };
    service.onSuccess = function(objEvent) {
      //var responseXML = objEvent.target.getInboundDocument();
     Speed.service.call();
     giTorrent.getJSXByName("matrix1").repaint();
     giTorrent.getJSXByName("matrix1").setValue(giTorrent.getJSXByName("Hash").getValue());
     switch ( giTorrent.getJSXByName("tabbedpane").getSelectedIndex() )
      { 
        case 3: DhtStatistics.service.call(); break;
        case 4: Trackerlist.service.call(); break;
        case 6: Peerlist.service.call(); break;
        default: break;
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