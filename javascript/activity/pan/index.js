function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var t = document.createElement('div');
    t.style.width = '100%';
    t.style.height = '30px';
    t.style.backgroundColor = '#A52A2A';
    body.appendChild(t);
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.height = '30px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    var tit = document.createElement('h5');
    tit.style.textAlign = 'center';
    tit.style.color = 'white';
    tit.innerHTML = 'Request For New PAN Card Or/Add Changes Or Correction in PAN Data';
    t.appendChild(tit);
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var d = document.createElement('div');
    d.style.width = '30px';
    d.style.height = '23px';
    td.appendChild(d);
    tr.appendChild(td);
    d.style.height = '23px';
    var settingsHtml = '';
    settingsHtml += "<p style=\"float:left;margin-top:4px;font-size:12px;line-height:.03\"><span style='font-size:12px;margin-top: 12px; float:left;color:red;'>&#10033; </span>&nbsp <b>Whether citizen of India</b> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp  Yes <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp No <input type=\"radio\"> </p>";

    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px ;margin-top:-1px;margin-bottom: 0px;\"><span style='font-size:13px ; margin-top:9px ; float:left;color:red;'>&#10033; </span>&nbsp<b> Permanent Account Number(PAN)</b><input type=\"text\"style=\"width:150px;height:20px; \" ></p>";

    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.03\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp&nbsp&nbsp <b>1.Name</b></p>";

    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px;margin-top:-2px ;\"><b>Title</b>&nbsp&nbsp&nbsp&nbsp Shri/Mr <input type=\"radio\" style=\"margin-top: 6px;\">&nbsp&nbsp&nbsp&nbsp Smt./Mrs. <input type=\"radio\" style=\"margin-top: 6px;\">&nbsp&nbsp&nbsp&nbsp Kumari/Ms <input type=\"radio\" style=\"margin-top: 6px;\">&nbsp&nbsp&nbsp&nbsp<span style=\"color: rgb(236, 235, 235);\">M/s</span></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px;margin-top:-2px ;\"><b>Last Name/Surname&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp First Name &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Middle Name</b><br><input type=\"text\"style=\"width:150px;height:20px; \" >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" ></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);


    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.01;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp&nbsp&nbsp <b>Name as you would like it printed on the card <span style=\"color: blue;\">(Prefix like Shri,Smt,Kumari,Late,Dr,CA,Ms,Mr,Mrs,M/s,Alias etc are not allowed)</span></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input type=\"text\" style=\"width:270px;height:23px;margin-top: 0px;padding-top:3px;\">";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.01;\"><b>Details of Parents. <span style=\"color: blue;\">(Prefix like Shri,Smt,Kumari,Late,Dr,CA,Ms,Mr,Mrs,M/s,Alias etc are not allowed)</span></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tbl1 = document.createElement('table')
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px;margin-top:-2px ;\"><b>Whether mother is single parent and you wish to apply PAN by furnishing the name of your<br>mother only</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;margin-left: 50px ;line-height:10px;margin-top:-2px ;\">Yes <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp No <input type=\"radio\"> </p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.03\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp&nbsp&nbsp <b>Father's Name<span style=\"color: blue;\">(Mandatory field. Even married women should give father's name only.)</span></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px;margin-top:-2px ;\"><b>Last Name/Surname&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp First Name &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Middle Name</b><br><input type=\"text\"style=\"width:150px;height:20px; \" >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" ></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.03\"><b><span style=\"color: blue;\">Mother's Name(This field is optional.)</span></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:10px;margin-top:-2px ;\"><b>Last Name/Surname&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp First Name &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Middle Name</b><br><input type=\"text\"style=\"width:150px;height:20px; \" >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input type=\"text\"style=\"width:150px;height:20px; \" ></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tbl1 = document.createElement('table')
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>4.Select Parent name which is to be printed on the card<br>&nbsp&nbsp<span style=\"color: blue;\">(In case no option is provided then PAN card will be issued with father's name)</span></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;margin-left: 100px ;line-height:10px;margin-top:-2px ;\">Father Name <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp Mother Name <input type=\"radio\"> </p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>5.Date of Birth/incorporation/Agreement/Partnership<br>&nbsp&nbsp&nbspof Trust Deed/Formation of Body of Individuals/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAssociation of Persons </b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;margin-left: 237px ;line-height:10px;margin-top:-2px ;\">&nbsp&nbspDD&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMM&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYYYY<br><select style=\"background-color:lightgrey\" ><option  >dd</option></select><select style=\"background-color:lightgray\" ><option  >mm</option></select><select style=\"background-color:white\" ><option  >&nbsp&nbsp&nbsp&nbsp</option></select></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);


    var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>6.Gender</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);



    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px; margin-left: 237px ;line-height:10px;margin-top:-2px ;\">Male <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp Female <input type=\"radio\"> &nbsp&nbsp TransGender <input type=\"radio\"> </p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);


    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.01;\"><b>7.Photo Mismatch</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.01;\"><b>8.Signature Mismatch</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>9.Address for Communication</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;margin-left: 237px ;line-height:10px;margin-top:-2px ;\">Residential <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp Office <input type=\"radio\"> </p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Office Name</b><i>(to be filled only in case office address)</i></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:330px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Flat/Door/Block No.</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:230px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Name of Premises/Building/Village</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:230px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Road/Street/Lane/PostOffice</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:230px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Area/Locality/Taluka/Sub-Division</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:230px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Town/City/District</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:230px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>State/Union Territory</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<select style=\"background-color: lightgray;width:210px;height: 23px;margin-left: 237px;margin-top: auto; margin-bottom: 0px;\"><option>--Please Select--</option></select>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);


    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>PIN</b><i>(Including PIN is Mandatory)</i></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:90px; height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Country</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<select style=\"background-color: lightgray;color: rgb(182, 179, 179); width:450px;height: 23px;margin-left: 237px;margin-top: auto; margin-bottom: 0px;\"><option>--Please Select--</option></select>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    //var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"><span style='font-size:13px ; margin-top:-2px ; float:left;color:red;'>&#10033; </span> &nbsp&nbsp <b>Zip</b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:90px;  height:23px; margin-left: 237px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color: lightgray; ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;line-height:.01;\"><b> 10.If you desire to update your other address, give required details & <u>Submit Proof of other addresses also.</u></b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\"> <b>E-mail ID &nbsp&nbsp </b></p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<input style=\"font-size: 12px;width:330px; height:23px; margin-left: 450px ; border: 1px solid black; margin-bottom:0px;margin-top: 0px;background-color:white ;\"></input>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);

    var tbl1 = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size: 12px; border-color:black ;margin-bottom: 0px;margin-top: 0px;\">In case of a citizen of India ,then</p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);

    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "<p style=\"font-size:12px;margin-left: 350px ;line-height:10px;margin-top:-2px ;\">AADHAAR <input type=\"radio\" style=\"font-size:15px;line-height:.03\">&nbsp&nbsp EID <input type=\"radio\"> </p>";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl1.appendChild(tr);
    tbl.appendChild(tbl1);


    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var settingsHtml = '';
    settingsHtml += "";
    td.innerHTML = settingsHtml;
    tr.appendChild(td);
    tbl.appendChild(tr);

    tbl.appendChild(tr);


    body.appendChild(tbl);

}
tableCreate();
