/// <reference path="../../typings/browser.d.ts" />

import * as angular from 'angular';
import * as tsTableNg from '../app/tsTableNg';
import * as tsTable from '../app/tsTable';
import {TableConfig} from "./tsTable";

namespace test {

    //need to reference with tsTable.MODULE_NAME otherwise no require() will be generated for tsTable
    let module = angular.module("table", [tsTableNg.MODULE_NAME]);

    //this does not work because only interfaces are used below hence typescript does not make a require() call
    //let module = angular.module("table", ['tsTable']);

    import IComponentOptions = angular.IComponentOptions;
    import IDirectiveFactory = angular.IDirectiveFactory;
    import IDirective = angular.IDirective;
    interface UserData {
        gender:string;
        first_name:string;
        last_name:string;
    }

    class UserDataViewController {
        private data = [
            {gender: "male", first_name: "Hugo", last_name: "Müller"},
            {gender: "female", first_name: "Petra", last_name: "Meier"},
        ];


        //noinspection JSUnusedGlobalSymbols used by directive
        public tableConfig:TableConfig = {
            rowTemplateUrl: "app/tpl/tableRow.tpl.html",
            columns: [
                {title: ""},
                {title: "Gender"},
                {title: "Name", width: "200"}
            ]
        };

        //noinspection JSUnusedGlobalSymbols used by template ng-click
        public addData() {
            this.data.push({gender: "male", first_name: "Mario", last_name: "Meister"})
        }

        public removeData() {
            this.data.pop();
        }

    }


    module.controller("UserDataViewController", UserDataViewController);

}