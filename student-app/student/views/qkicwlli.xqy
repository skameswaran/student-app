﻿<script type="text/javascript">

    function allowDrop(ev) {
        ev.preventDefault();
    }

    // getElementById
    function $id(id) {
        return document.getElementById(id);
    }

    //
    // output information
    function Output(msg) {
        var m = $id("messages");
        m.innerHTML = msg + m.innerHTML;
    }

    // call initialization file
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }

    //
    // initialize
    function Init() {

        var fileselect = $id("fileselect"),
            filedrag = $id("filedrag"),
            submitbutton = $id("submitbutton");

        // file select
        fileselect.addEventListener("change", FileSelectHandler, false);

        // is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {

            // file drop
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "block";

            // remove submit button
            submitbutton.style.display = "none";
        }

    }


</script>
<div ng-controller="createCtrl">

    <div class="container">
        <div class="row">
            <form name="frmEntry" class="student-form-container">
                <header class="student-form-header">
                    Create Student
                </header>
                <div class="container">
                    <div class="student-form-content">
                        <div class="col col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div class="row">
                                <section class="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Student Name
                                </section>
                                <section class="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <label class="input">
                                        <input type="text" class="student-input" ng-class="{'state-success': !frmEntry.studentName.$error.required, 'state-error': frmEntry.studentName.$error.required}" ng-required="true" name="studentName" ng-model="studentName" />
                                    </label>
                                    <em class="invalid" ng-show="frmEntry.studentName.$error.required">Student name is required</em>
                                </section>
                            </div>
                            <div class="row">
                                <section class="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Email
                                </section>
                                <section class="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <label class="input">
                                        <input type="email" class="student-input" ng-class="{'state-success': frmEntry.studentEmail.$valid, 'state-error': frmEntry.studentEmail.$invalid}" ng-required="true" name="studentEmail" ng-model="studentEmail" />

                                    </label>
                                    <em class="invalid" ng-show="frmEntry.studentEmail.$invalid">Enter a valid email</em>
                                </section>
                            </div>
                            <div class="row">
                                <section class="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Age
                                </section>
                                <section class="col col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                    <label class="input">
                                        <input type="number" min="5" max="50" class="student-input" ng-class="{'state-success': !frmEntry.studentAge.$error.required && frmEntry.studentAge.$valid, 'state-error': frmEntry.studentAge.$error.required || frmEntry.studentAge.$invalid}" ng-required="true" name="studentAge" ng-model="studentAge" />

                                    </label>
                                    <em class="invalid" ng-show="frmEntry.studentAge.$invalid">Enter a valid Age</em>
                                </section>
                            </div>
                            <div class="row">
                                <section class="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Contact Number
                                </section>
                                <section class="col col-lg-6 col-md-9 col-sm-12 col-xs-12">
                                    <label class="input">
                                        <input type="tel" maxlength="10" class="student-input" ng-class="{'state-success': !frmEntry.studentContact.$error.required && frmEntry.studentContact.$valid, 'state-error': frmEntry.studentContact.$error.required || frmEntry.studentContact.$invalid}" ng-required="true" name="studentContact" ng-model="studentContact" />

                                    </label>
                                    <em class="invalid" ng-show="frmEntry.studentContact.$invalid">Enter a valid contact number</em>
                                </section>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-md-12 col-sm-12 col-xs-12" style="z-index:0;">
                            <div class="row">
                                <section class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <label>
                                        <img class="img-thumbnail" src="http://misbbocconiblog.com/wp-content/uploads/2013/02/passport-size.jpg" />
                                    </label>
                                </section>
                            </div>
                            <div class="row">
                                <div class="dropbox1">
                                    <span style=" margin-left: -70px !important;margin-top: 15px !important;position: absolute;">INP-Commercial Invoice <br />& Packing List</span>
                                    <input class="dropbox" id="filePicker" ng-class="dropClass" type="file"
                                           name="file" ng-model="file" ondragover="allowDrop(event)"  ondrop="alert('dropped');"
                                           onchange="angular.element(this).scope().uploadFile(this.files, 'Commercial Invoice & Packing List')"
                                           style="-moz-opacity: 0;opacity: 0;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="student-form-footer">
                    <button class="btn btn-primary" ng-click="Create()">
                        Create
                    </button>
                </footer>
            </form>
        </div>
    </div>
</div>

