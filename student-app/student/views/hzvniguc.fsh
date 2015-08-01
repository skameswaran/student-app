﻿<div>
    <form name="frmEntry" novalidate>
        <div>
            <input type="text" ng-model="name" name="txtName" />
            {{name}}
        </div>
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
        <footer>
            <button class="btn-primary">
                Create
            </button>
        </footer>
    </form>
</div>
