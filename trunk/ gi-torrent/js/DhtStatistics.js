jsx3.lang.Package.definePackage(
  "DhtStatistics.service",          //the full name of the package to create
  function(service) {          //name the argument of this function

    //call this method to begin the service call (DhtStatistics.service.call();)
    service.call = function() {
      var objService = giTorrent.loadResource("DhtStatistics_xml");
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
      var myDoc = giTorrent.getCache().getDocument("Dht_Statistics");
      iter = myDoc.selectNodes('//record').iterator();
      val = iter.next().getAttribute('Result');
      if (val == 1) 
      {
       giTorrent.getJSXByName("Active_t").setValue("Yes");
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Buckets_t").setValue(val);
       val = iter.next().getAttribute('Result');
       i = 0; 
       while ( val >= 1024 ){ val = Math.round((10*val)/1024)/10; i++; } 
       switch (i) { 
        case 3:  giTorrent.getJSXByName("Bytes_read_t").setValue(val + " Gb") ; break;
        case 2:  giTorrent.getJSXByName("Bytes_read_t").setValue(val + " Mb"); break;
        case 1:  giTorrent.getJSXByName("Bytes_read_t").setValue(val + " Kb"); break;
        default: giTorrent.getJSXByName("Bytes_read_t").setValue(val + " b"); break;
       }
       val = iter.next().getAttribute('Result');
       i = 0; 
       while ( val >= 1024 ){ val = Math.round((10*val)/1024)/10; i++; } 
       switch (i) { 
        case 3:  giTorrent.getJSXByName("Bytes_written_t").setValue(val + " Gb") ; break;
        case 2:  giTorrent.getJSXByName("Bytes_written_t").setValue(val + " Mb"); break;
        case 1:  giTorrent.getJSXByName("Bytes_written_t").setValue(val + " Kb"); break;
        default: giTorrent.getJSXByName("Bytes_written_t").setValue(val + " b"); break;
       }
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Cycle_t").setValue(val);
       val = iter.next().getAttribute('Result');
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Nodes_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Dht_Peers_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Dht_Peers_Max_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Queries_received_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Queries_sent_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Replies_received_t").setValue(val);
       val = iter.next().getAttribute('Result');
       giTorrent.getJSXByName("Torrents_t").setValue(val);        
      }
      else 
      {
       giTorrent.getJSXByName("Active_t").setValue("No");
       giTorrent.getJSXByName("Buckets_t").setValue("");
       giTorrent.getJSXByName("Bytes_read_t").setValue("");
       giTorrent.getJSXByName("Bytes_written_t").setValue("");
       giTorrent.getJSXByName("Cycle_t").setValue("");
       giTorrent.getJSXByName("Nodes_t").setValue("");
       giTorrent.getJSXByName("Dht_Peers_t").setValue("");
       giTorrent.getJSXByName("Dht_Peers_Max_t").setValue("");
       giTorrent.getJSXByName("Queries_received_t").setValue("");
       giTorrent.getJSXByName("Queries_sent_t").setValue("");
       giTorrent.getJSXByName("Replies_received_t").setValue("");
       giTorrent.getJSXByName("Torrents_t").setValue("");
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

