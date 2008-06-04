jsx3.lang.Package.definePackage(
  "Speed.service",             //the full name of the package to create
  function(service) {          //name the argument of this function

    //call this method to begin the service call (Speed.service.call();)
    service.call = function() {
      var objService = giTorrent.loadResource("Speed_xml");
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
      var myDoc = giTorrent.getCache().getDocument("Speed");
      iter = myDoc.selectNodes('//record').iterator();
      val = Math.round(10*iter.next().getAttribute('Result')/1024)/10;
      giTorrent.getJSXByName("Up_Rate_t").setValue(val);
      val = Math.round(10*iter.next().getAttribute('Result')/1024)/10;
      giTorrent.getJSXByName("Down_Rate_t").setValue(val);
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

